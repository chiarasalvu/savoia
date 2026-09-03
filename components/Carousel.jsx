'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AUTOPLAY_MS = 6000;
const DEFAULT_CLASSNAME = 'relative h-[400px] w-full overflow-hidden bg-savoia-light md:h-[650px]';

export default function Carousel({ slides, className, showArrows = true }) {
  const [index, setIndex] = useState(0);

  // Re-armed every time the slide changes — whether that change came from the
  // timer itself or from a manual arrow click — so clicking never causes an
  // immediate extra jump on top of the autoplay.
  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, slides.length]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className={className ?? DEFAULT_CLASSNAME}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {showArrows && slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
