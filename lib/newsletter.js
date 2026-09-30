// Google Apps Script Web App URL that appends newsletter signups to the
// "Newsletter Hoteles Savoia" Google Sheet (one tab per hotel), instead of
// Formspree. Null until deployed — see NEWSLETTER_SETUP.md for the 4-click
// setup. Footer.jsx falls back to the old Formspree endpoint while this is
// null, so signups never stop working during the switch.
export const NEWSLETTER_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwOgu6zebWfQMcXHbn9do078lYq8pGShdA9E98UiJFWrKCxD2LASziHUsNGpKqFFFjg/exec';

// Maps a hotel's route prefix (see lib/hotelContacts.js) to the sheet tab
// name the Apps Script code appends rows to. Must stay in sync with the
// SHEET_NAMES map in NEWSLETTER_SETUP.md's Code.gs.
export const NEWSLETTER_HOTEL_SLUG = {
  '/ostende': 'ostende',
  '/mendoza': 'mendoza',
  '/san-bernardo': 'san-bernardo',
  '/puerto-hamlet': 'hamlet',
};
