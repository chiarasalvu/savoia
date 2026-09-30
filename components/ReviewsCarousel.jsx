'use client';

import { useRef } from 'react';

function Stars({ rating }) {
  return (
    <div aria-label={`${rating} de 5 estrellas`} className="text-savoia-charcoal">
      {'★'.repeat(rating)}
      <span className="text-savoia-taupe/40">{'★'.repeat(5 - rating)}</span>
    </div>
  );
}

// Same header pattern as HotelesCarousel: title left, prev/next arrows top
// right, cards in a row — four reviews visible, arrows there for whenever
// more get added.
export default function ReviewsCarousel({ reviews }) {
  const scrollerRef = useRef(null);

  function scrollBy(amount) {
    scrollerRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between md:mb-12">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">LO QUE DICEN NUESTROS HUÉSPEDES</h2>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollBy(-320)}
            className="flex h-10 w-10 items-center justify-center border border-savoia-charcoal text-savoia-charcoal"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => scrollBy(320)}
            className="flex h-10 w-10 items-center justify-center border border-savoia-charcoal text-savoia-charcoal"
          >
            →
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
        {reviews.map((review) => (
          <div
            key={review.author}
            className="w-[280px] shrink-0 snap-start border border-savoia-taupe/20 px-6 py-8 text-left"
          >
            {review.hotel && (
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-savoia-taupe-text">{review.hotel}</p>
            )}
            <Stars rating={review.rating} />
            <p className="mt-4 text-sm text-savoia-charcoal">&ldquo;{review.text}&rdquo;</p>
            <p className="mt-4 text-xs text-savoia-taupe-text">
              {review.author} — {review.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
