'use client';

import { useState } from 'react';
import Image from 'next/image';

// Full-page version of the OKU room-detail popup: image + thumbnail strip
// on one side, title / description / capacity / amenities checklist on the
// other. Same layout as the reference modal, just as its own page instead
// of an overlay.
export default function RoomDetail({
  title,
  description,
  images,
  maxCapacity,
  amenities,
  details,
  amenitiesTitle = 'Comodidades',
  compact = false,
  headingTag = 'h1',
  reverse = false,
}) {
  const Heading = headingTag;
  const [active, setActive] = useState(0);

  return (
    <div className={`mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 pb-16 md:grid-cols-2 md:gap-16 md:px-8 md:pb-20 ${compact ? '' : 'pt-[128px] md:pt-[144px]'}`}>
      <div className={reverse ? 'md:order-2' : ''}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-savoia-stone">
          <Image src={images[active].src} alt={images[active].alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        {images.length > 1 && (
          <div className="mt-3 grid grid-cols-5 gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`relative aspect-square overflow-hidden transition-opacity ${i === active ? '' : 'opacity-60 hover:opacity-100'}`}
              >
                <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={reverse ? 'md:order-1' : ''}>
        <Heading className="text-2xl font-medium text-savoia-charcoal md:text-3xl">{title}</Heading>
        <p className="mt-4 text-savoia-taupe-text">{description}</p>

        {maxCapacity && (
          <div className="mt-8 border-t border-savoia-taupe/20 pt-6">
            <h2 className="text-xs font-medium uppercase tracking-widest text-savoia-charcoal">Capacidad máxima</h2>
            <p className="mt-2 text-savoia-taupe-text">{maxCapacity}</p>
          </div>
        )}

        {details?.map((d, i) => (
          <div key={d.label} className={`${i === 0 && !maxCapacity ? 'mt-8' : 'mt-6'} border-t border-savoia-taupe/20 pt-6`}>
            <h2 className="text-xs font-medium uppercase tracking-widest text-savoia-charcoal">{d.label}</h2>
            <p className="mt-2 text-savoia-taupe-text">{d.text}</p>
          </div>
        ))}

        {amenities && (
          <div className="mt-6 border-t border-savoia-taupe/20 pt-6">
            <h2 className="text-xs font-medium uppercase tracking-widest text-savoia-charcoal">{amenitiesTitle}</h2>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {amenities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-savoia-taupe-text">
                  <span aria-hidden="true" className="mt-0.5 text-savoia-charcoal">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
