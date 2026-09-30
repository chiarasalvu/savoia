// Formspree endpoint per hotel — each property sends its reservation-form
// leads to its own inbox instead of a shared generic one. Keyed by the same
// `hotel` value used in HotelSelect/LockedHotelField.
export const FORMSPREE_BY_HOTEL = {
  ostende: 'https://formspree.io/f/xldryqnw',
  mendoza: 'https://formspree.io/f/mbglwzdp',
  'san bernardo': 'https://formspree.io/f/xoevrkej',
  cariló: 'https://formspree.io/f/myezoneg',
};
