export default function VideoHero({ src }) {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden md:h-[80vh]">
      <video autoPlay muted loop playsInline className="h-full w-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
