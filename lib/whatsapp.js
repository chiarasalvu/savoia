// WhatsApp number per property. Landing, Ostende and San Bernardo share the
// default; Hamlet and Mendoza have their own lines.
const DEFAULT_NUMBER = '5491158958380';

const NUMBERS_BY_PREFIX = [
  { prefix: '/puerto-hamlet', number: '5491158645104' },
  { prefix: '/mendoza', number: '5491157379702' },
];

export function whatsappNumberForPath(pathname) {
  return NUMBERS_BY_PREFIX.find((p) => pathname?.startsWith(p.prefix))?.number ?? DEFAULT_NUMBER;
}

export function whatsappHref(pathname, text) {
  const base = `https://wa.me/${whatsappNumberForPath(pathname)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
