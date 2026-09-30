# Conectar el newsletter a la planilla (en vez de Formspree)

Ya creada: **[Newsletter Hoteles Savoia](https://docs.google.com/spreadsheets/d/1sSDgjsAOn7_FG1xsaM6gBQWXu8Zn9bJv0v2J-Nc2BKw/edit)**.

Falta un único paso que solo vos podés hacer (Google no me deja autorizar esto en tu nombre): pegar este código en la planilla y publicarlo como "app web". Son 4 clics.

## Pasos

1. Abrí la planilla de arriba → menú **Extensiones → Apps Script**.
2. Borrá lo que haya en el editor y pegá el código de abajo (`Code.gs`).
3. Arriba, en el desplegable de funciones (al lado de ▶ Ejecutar), elegí **setupTabs** y hacé clic en ▶ Ejecutar. Te va a pedir autorizar permisos la primera vez — aceptá. Esto crea las 5 pestañas (Ostende, Puerto Hamlet, Mendoza, San Bernardo, General) con los encabezados, y borra la hoja en blanco que viene por defecto.
4. Arriba a la derecha, **Implementar → Nueva implementación**. Tipo: **Aplicación web**. "Ejecutar como": vos. "Quién tiene acceso": **Cualquier usuario**. Clic en **Implementar**, autorizá de nuevo si lo pide.
5. Copiá la URL que te da (termina en `/exec`) y pasámela — con eso activo el cambio en el sitio en un minuto.

## Code.gs

```js
const SHEET_NAMES = {
  ostende: 'Ostende',
  hamlet: 'Puerto Hamlet',
  mendoza: 'Mendoza',
  'san-bernardo': 'San Bernardo',
  general: 'General',
};
const HEADERS = ['Fecha', 'Nombre', 'Apellido', 'Email'];

function setupTabs() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.values(SHEET_NAMES).forEach((name) => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  });
  // Delete the default blank sheet ("Sheet1"/"Hoja 1") Google adds to every
  // new spreadsheet, now that the real tabs exist.
  ['Sheet1', 'Hoja 1'].forEach((name) => {
    const sheet = ss.getSheetByName(name);
    if (sheet && ss.getSheets().length > 1) ss.deleteSheet(sheet);
  });
}

function doPost(e) {
  const params = (e && e.parameter) || {};
  const sheetName = SHEET_NAMES[params.hotel] || SHEET_NAMES.general;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(HEADERS);
  }
  sheet.appendRow([new Date(), params.name || '', params.lastname || '', params.email || '']);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

## Cuando me pases la URL

Yo cambio una sola línea en `lib/newsletter.js`:

```js
export const NEWSLETTER_ENDPOINT = 'TU_URL_AQUI';
```

y a partir de ahí el newsletter deja de pasar por Formspree y cada suscripción cae directo en la pestaña del hotel correspondiente (o "General" si es desde la landing).
