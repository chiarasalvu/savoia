import Carousel from '@/components/Carousel';

export default function AmenityDetail({ images, title, detailLines }) {
  return (
    <section className="flex flex-col gap-8 px-6 py-10 md:flex-row md:px-8 md:py-16">
      <div className="md:w-1/2">
        <Carousel slides={images} />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-medium">{title}</h2>
        <span className="mb-6 mt-2 block h-0.5 w-10 bg-savoia-accent" />
        {detailLines.map(({ label, text }) => (
          <div key={label} className="mb-4">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-savoia-taupe">{label}</p>
            <p className="mt-1">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
