'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const HEADER_DOCK_CENTER = 44; // matches Header's h-[88px]
// How much scroll it takes for the logo to finish rising into the header —
// short on purpose, a quick snap near the top rather than a slow crawl
// across the whole hero (Casa Cook's own hero is much taller than its
// transition, so the logo is already docked well before the hero ends).
const SNAP_DISTANCE = 180;

// The Casa Cook effect: a single logo starts large and centered inside the
// hero, then as the user scrolls through the hero's height it shrinks and
// rises until it settles into the header's docked slot, where it stays
// fixed for the rest of the scroll. One element the whole time (not two
// logos cross-fading) — position/scale are interpolated live from scroll
// progress through the hero. The hero-center start position is measured
// from the actual hero element (not a guessed viewport fraction), so it's
// precisely centered whatever the header/hero heights end up being.
export default function ScrollLogo({ heroSelector = '#home-hero' }) {
  // Default docked (1): every page except home lacks the tall hero, so the
  // logo should just sit in the header from the first paint, not flash big.
  const [progress, setProgress] = useState(1);
  const [heroCenter, setHeroCenter] = useState(HEADER_DOCK_CENTER);
  const rafRef = useRef(null);

  useEffect(() => {
    function measure() {
      const hero = document.querySelector(heroSelector);
      if (!hero) {
        setProgress(1);
        return;
      }
      const heroHeight = hero.offsetHeight;
      const y = window.scrollY;
      const p = Math.min(1, Math.max(0, y / SNAP_DISTANCE));
      setProgress(p);

      // Hero's own center, in document coordinates, so it stays correct
      // regardless of scroll position (rect.top is viewport-relative).
      const rect = hero.getBoundingClientRect();
      setHeroCenter(rect.top + y + heroHeight / 2);
    }

    function onScroll() {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        measure();
        rafRef.current = null;
      });
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [heroSelector]);

  // heroCenter is in document coordinates; convert to a fixed (viewport)
  // top by subtracting current scroll, so it tracks correctly while the
  // hero itself scrolls out of view.
  const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
  const startTopViewport = heroCenter - scrollY;
  const top = startTopViewport + (HEADER_DOCK_CENTER - startTopViewport) * progress;
  const scale = 1 - 0.48 * progress;

  return (
    <div
      className="pointer-events-none fixed left-1/2 z-40"
      style={{ top, transform: `translate(-50%, -50%) scale(${scale})` }}
    >
      <Image
        src="/img/logo-savoia-hires.png"
        alt="Hoteles Savoia"
        width={1438}
        height={464}
        style={{ height: 'auto', width: '220px', filter: `brightness(0) invert(${1 - progress})` }}
        priority
      />
    </div>
  );
}
