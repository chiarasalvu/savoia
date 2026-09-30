export default function ContactInfoBar({
  locationHref = 'https://maps.app.goo.gl/6gZ1Gr2gGvhAJ3CR7',
  locationText = 'F.D. Roosevelt 2445 1D / CABA',
  phoneHref = 'tel:1147886969',
  phoneText = '+ 54 (011) 4788-6969',
  emailHref = 'mailto:reservas@hotelessavoia.com',
  emailText = 'reservas@hotelessavoia.com',
}) {
  const items = [
    { title: 'Ubicación', href: locationHref, text: locationText },
    { title: 'Número', href: phoneHref, text: phoneText },
    { title: 'Correo electrónico', href: emailHref, text: emailText },
  ];

  return (
    <section className="bg-savoia-dark text-white">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-center gap-10 px-6 py-16 md:flex-row md:px-8">
        {items.map(({ title, href, text }) => (
          <div key={title} className="flex-1 text-center">
            <a href={href} className="text-white">
              <span aria-hidden="true" className="mx-auto mb-2 block text-3xl leading-none">
                •
              </span>
              <h3 className="pb-5 text-lg font-medium text-white">{title}</h3>
            </a>
            <a href={href} className="block text-white">
              {text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
