import Carousel from '@/components/Carousel';

export default function AmenityDetail({ images, title, detailLines }) {
  return (
    <section className="flex flex-col gap-8 px-5 py-10 md:flex-row md:px-10">
      <div className="md:w-1/2">
        <Carousel slides={images} />
      </div>
      <div className="md:w-1/2">
        <h2 className="mb-4 text-2xl font-medium">{title}</h2>
        {detailLines.map(({ label, text }) => (
          <p key={label} className="mb-3">
            <span className="font-bold">{label}: </span>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
