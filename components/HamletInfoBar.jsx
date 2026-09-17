import { Hotel, Phone, Mail } from 'lucide-react';

// Same structure as ContactInfoBar (used sitewide), but in Puerto Hamlet's
// own brown — matches HamletFooter below it, requested for every page
// inside /hamlet.
export default function HamletInfoBar({
  locationHref = 'https://maps.app.goo.gl/XCG5uryNonStL4ms6',
  locationText = 'Cerezo y Avutarda - Cariló',
  phoneHref = 'tel:02254570623',
  phoneText = '(02254) 57-0623 / 57-1623',
  emailHref = 'mailto:reservas@hotelessavoia.com',
  emailText = 'reservas@hotelessavoia.com',
}) {
  const items = [
    { Icon: Hotel, title: 'Ubicación', href: locationHref, text: locationText },
    { Icon: Phone, title: 'Número', href: phoneHref, text: phoneText },
    { Icon: Mail, title: 'Correo electrónico', href: emailHref, text: emailText },
  ];

  return (
    <section className="bg-hamlet-brown text-white">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-center gap-10 px-6 py-16 md:flex-row md:px-8">
        {items.map(({ Icon, title, href, text }) => (
          <div key={title} className="flex-1 text-center">
            <a href={href} className="text-white">
              <Icon size={40} className="mx-auto mb-2" />
              <h3 className="pb-5 text-xl font-medium text-white">{title}</h3>
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
