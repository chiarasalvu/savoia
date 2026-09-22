// Single source of truth for each property's contact details — used by the
// Footer (matched against the current path) and by each property's own
// contact form (which already knows which hotel it is, so it imports its
// entry directly instead of going through contactForPath).

export const DEFAULT_CONTACT = {
  logoSrc: '/img/logo-savoia-hires.png',
  logoW: 1438,
  logoH: 464,
  locationText: 'F.D. Roosevelt 2445 1D / CABA',
  locationHref: 'https://maps.app.goo.gl/6gZ1Gr2gGvhAJ3CR7',
  phoneText: '+ 54 (011) 4788-6969',
  phoneHref: 'tel:1147886969',
  emailText: 'reservas@hotelessavoia.com',
  emailHref: 'mailto:reservas@hotelessavoia.com',
};

// facebookHref/instagramHref are only set when a real, verified official
// account was found for that property.
export const SAN_BERNARDO_CONTACT = {
  prefix: '/san-bernardo',
  logoSrc: '/img/logo-savoia-hires.png',
  logoW: 1438,
  logoH: 464,
  locationText: 'Strobel 2099 - San Bernardo',
  locationHref: 'https://maps.app.goo.gl/tT5bGSmaVbJpzRU6A',
  phoneText: 'Tel: (02257) 460-211 / 250',
  phoneHref: 'tel:02257460211',
  emailText: 'reservas@hotelessavoia.com',
  emailHref: 'mailto:reservas@hotelessavoia.com',
  instagramHref: 'https://www.instagram.com/savoiasanbernardo',
  instagramHandle: '@savoiasanbernardo',
};

export const MENDOZA_CONTACT = {
  prefix: '/mendoza',
  logoSrc: '/img/logo-savoia-hires.png',
  logoW: 1438,
  logoH: 464,
  locationText: 'Avellaneda 3653, Bermejo - Mendoza',
  locationHref: 'https://maps.app.goo.gl/5tZqW9x7ouJCyS276',
  phoneText: 'Tel: (+54) 11 5737-9702',
  phoneHref: 'tel:1157379702',
  emailText: 'reservas@hotelessavoia.com',
  emailHref: 'mailto:reservas@hotelessavoia.com',
  facebookHref: 'https://www.facebook.com/p/Hotel-Savoia-Mendoza-100063181242678/',
  // No vanity URL on Facebook for this one (numeric page id) — shown as the
  // page name instead of a fabricated @handle.
  facebookHandle: 'Hotel Savoia Mendoza',
  instagramHref: 'https://www.instagram.com/savoiamendoza',
  instagramHandle: '@savoiamendoza',
};

export const PUERTO_HAMLET_CONTACT = {
  prefix: '/puerto-hamlet',
  logoSrc: '/img/puerto-hamlet/logo-hamlet-carilo.png',
  logoW: 1459,
  logoH: 423,
  logoFooterW: 150,
  locationText: 'Cerezo 104 - Cariló',
  locationHref: 'https://maps.app.goo.gl/XCG5uryNonStL4ms6',
  phoneText: 'Tel: (02254) 57-1623',
  phoneHref: 'tel:02254571623',
  emailText: 'reservas@hotelessavoia.com',
  emailHref: 'mailto:reservas@hotelessavoia.com',
  facebookHref: 'https://www.facebook.com/PuertoHamlet',
  facebookHandle: '@PuertoHamlet',
  instagramHref: 'https://www.instagram.com/puerto_hamlet',
  instagramHandle: '@puerto_hamlet',
};

export const OSTENDE_CONTACT = {
  prefix: '/ostende',
  logoSrc: '/img/ostende/logonuevo-savoia.png',
  logoW: 1438,
  logoH: 646,
  logoFooterW: 130,
  locationText: 'Biarritz 184 e/ Defensa y Progreso - Ostende, Pinamar',
  locationHref: 'https://maps.app.goo.gl/7KvrAK9TjD1MjuA89',
  phoneText: '(02254) 49-6600',
  phoneHref: 'tel:02254496600',
  emailText: 'reservas@hotelessavoia.com',
  emailHref: 'mailto:reservas@hotelessavoia.com',
  facebookHref: 'https://www.facebook.com/savoiaostende',
  facebookHandle: '@savoiaostende',
  instagramHref: 'https://www.instagram.com/savoiaostende',
  instagramHandle: '@savoiaostende',
};

export const HOTEL_CONTACT = [SAN_BERNARDO_CONTACT, MENDOZA_CONTACT, PUERTO_HAMLET_CONTACT, OSTENDE_CONTACT];

export function contactForPath(pathname) {
  return HOTEL_CONTACT.find((h) => pathname?.startsWith(h.prefix)) ?? DEFAULT_CONTACT;
}
