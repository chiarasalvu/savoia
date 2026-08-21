'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-savoia-light md:h-[650px]">
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
    </div>
  );
}
