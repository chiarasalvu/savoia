'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// OKU-style "prime destinations" carousel, sized so all three slides stay
// fully inside the container — nothing bleeds past its edges. Sizes are set
// in cqw (of this component's own box, via containerType: inline-size) so
// the layout scales with the container's width, not the viewport, and the
// side/center offset math (below) guarantees a fixed gap between slides
// instead of letting them overlap or run off screen.
function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
      <path d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CenterCarousel({ items, captionHeight = 150, initialActive = 0 }) {
  const [active, setActive] = useState(initialActive);
  const n = items.length;
  const drag = useRef({ x: null, moved: false });

  function next() {
    setActive((a) => (a + 1) % n);
  }
  function prev() {
    setActive((a) => (a - 1 + n) % n);
  }

  function onPointerDown(e) {
    drag.current = { x: e.clientX, moved: false };
  }
  function onPointerMove(e) {
    if (drag.current.x !== null && Math.abs(e.clientX - drag.current.x) > 10) drag.current.moved = true;
  }
  function onPointerUp(e) {
    const { x } = drag.current;
    drag.current.x = null;
    if (x === null) return;
    const dx = e.clientX - x;
    if (dx <= -50) next();
    else if (dx >= 50) prev();
  }
  function onPointerCancel() {
    drag.current.x = null;
  }

  function offsetOf(i) {
    let d = (i - active + n) % n;
    if (d > n / 2) d -= n;
    return d;
  }

  // Center card = --wc, side cards = --ws, a fixed --gap between them (all
  // in cqw). offsetPct is the distance from center a side slide's own
  // center sits at, derived so the gap between edges is always --gap —
  // never negative, never bleeding past the 0%/100% container bounds.
  const boxStyle = { '--cap': `${captionHeight}px`, containerType: 'inline-size' };

  return (
    <div
      className="relative mx-auto max-w-[1400px] px-6 [--gap:4cqw] [--wc:92cqw] [--ws:42cqw] md:px-8 md:[--wc:38cqw] md:[--ws:24cqw]"
      style={boxStyle}
    >
      <div
        className="relative mx-auto cursor-grab touch-pan-y select-none active:cursor-grabbing"
        style={{ height: 'calc(var(--wc) * 0.625 + var(--cap))' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onPointerLeave={onPointerCancel}
      >
        {items.map((item, i) => {
          const d = offsetOf(i);
          const isActive = d === 0;
          const visible = Math.abs(d) <= 1;
          const w = isActive ? 'var(--wc)' : 'var(--ws)';
          const offsetPct = 'calc(var(--wc) / 2 + var(--gap) + var(--ws) / 2)';
          return (
            <div
              key={item.title}
              className={`absolute left-1/2 top-1/2 transition-[transform,opacity,width] duration-500 ease-out ${
                visible ? (isActive ? 'opacity-100' : 'hidden opacity-100 md:block') : 'pointer-events-none opacity-0'
              }`}
              style={{
                width: w,
                transform: `translate(calc(-50% + ${d} * ${offsetPct}), -50%)`,
                zIndex: isActive ? 2 : 1,
              }}
              aria-hidden={!isActive}
            >
              <div className={`relative w-full overflow-hidden bg-savoia-stone ${isActive ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  draggable={false}
                  className="object-cover"
                />
                {!isActive && (
                  <button
                    type="button"
                    aria-label={`Ver ${item.title}`}
                    onClick={() => {
                      if (!drag.current.moved) setActive(i);
                    }}
                    className="absolute inset-0 bg-black/10"
                  />
                )}
              </div>
              {isActive && (
                <div className="flex flex-col items-center bg-savoia-body px-4 pt-4 text-center" style={{ height: 'var(--cap)' }}>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-savoia-charcoal md:text-base">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-savoia-taupe-text md:text-sm">{item.text}</p>
                    {item.href && (
                      <Link
                        href={item.href}
                        className="mt-2.5 inline-block bg-savoia-nav-hover px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-savoia-charcoal transition-colors hover:bg-savoia-charcoal hover:text-white md:text-xs"
                      >
                        Ver más
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-[-4px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[9999px] bg-white/90 text-savoia-charcoal shadow-lg transition hover:bg-white md:left-[-28px] md:h-12 md:w-12"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          className="absolute right-[-4px] top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[9999px] bg-white/90 text-savoia-charcoal shadow-lg transition hover:bg-white md:right-[-28px] md:h-12 md:w-12"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}
