// Full-bleed looping video behind the landing's centered logo. The dark
// overlay keeps the (white, while over the hero) logo legible. The poster
// shows until /videos/hero-landing.mp4 exists / finishes loading.
export default function LandingHero() {
  return (
    <section id="home-hero" className="relative h-screen w-full overflow-hidden bg-savoia-charcoal">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/home/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-landing.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
    </section>
  );
}
