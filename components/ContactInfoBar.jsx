import { Hotel, Phone, Mail } from 'lucide-react';

export default function ContactInfoBar({
  locationHref = 'https://maps.app.goo.gl/6gZ1Gr2gGvhAJ3CR7',
  locationText = 'F.D. Roosevelt 2445 1D / CABA',
  phoneHref = 'tel:1147886969',
  phoneText = '+ 54 (011) 4788-6969',
  emailHref = 'mailto:reservas@hotelessavoia.com',
  emailText = 'reservas@hotelessavoia.com',
}) {
  const items = [
    { Icon: Hotel, title: 'Ubicación', href: locationHref, text: locationText },
    { Icon: Phone, title: 'Número', href: phoneHref, text: phoneText },
    { Icon: Mail, title: 'Correo electrónico', href: emailHref, text: emailText },
  ];

  return (
    <section className="bg-savoia-dark text-white">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-center gap-8 px-5 py-10 md:flex-row">
        {items.map(({ Icon, title, href, text }) => (
          <div key={title} className="flex-1 text-center">
            <a href={href} className="text-white">
              <Icon size={40} className="mx-auto mb-2" />
              <h3 className="text-lg font-medium">{title}</h3>
            </a>
            <a href={href} className="text-white">
              {text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
