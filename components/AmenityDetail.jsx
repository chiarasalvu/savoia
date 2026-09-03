import Carousel from '@/components/Carousel';

export default function AmenityDetail({ images, title, detailLines }) {
  return (
    <section className="flex flex-col gap-8 px-6 py-10 md:flex-row md:px-8 md:py-16">
      <div className="md:w-1/2">
        <Carousel slides={images} className="relative aspect-square w-full overflow-hidden bg-savoia-stone" />
      </div>
      {/* shadow-only "card" (no fill), matching the live site's .navdetalles3:
          it floats on the page background instead of sitting in a filled box. */}
      <div className="flex flex-col justify-center px-2 text-left shadow-[14px_14px_20px_0_rgba(20,20,20,0.3)] md:w-1/2 md:px-10">
        <h2 className="mb-6 text-2xl font-medium">{title}</h2>
        {detailLines.map(({ label, text }) => (
          <p key={label} className="mb-4">
            <span className="font-semibold">{label}: </span>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
