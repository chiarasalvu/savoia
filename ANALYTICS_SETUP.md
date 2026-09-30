# Instalar Google Analytics y Search Console

Ya dejé todo el código listo (`app/layout.js`, `app/sitemap.xml`, `app/robots.txt`) — falta crear las dos propiedades en Google, **con la cuenta de Google del cliente (Hoteles Savoia)**, y pasarme los dos códigos que generan. Con eso activo todo en un minuto.

## 1. Google Analytics (GA4)

1. Con la cuenta de Google de Hoteles Savoia, entrá a **[analytics.google.com](https://analytics.google.com)**.
2. **Administrar** (ícono de engranaje abajo a la izquierda) → **Crear propiedad**.
3. Nombre: "Hoteles Savoia" (o el que prefieran). Zona horaria: Argentina. Moneda: ARS.
4. Elegí categoría del rubro (Hoteles/Viajes) y tamaño de la empresa.
5. En "Flujo de datos" elegí **Web**, poné la URL `https://www.hotelessavoia.com` y un nombre de flujo.
6. Te va a mostrar un **"ID de MEDICIÓN"** con este formato: `G-XXXXXXXXXX`. Copiámelo.

## 2. Google Search Console

1. Con la misma cuenta, entrá a **[search.google.com/search-console](https://search.google.com/search-console)**.
2. **Agregar propiedad** → elegí el tipo **"Prefijo de URL"** (no "Dominio", así no hace falta tocar el DNS) → poné `https://www.hotelessavoia.com`.
3. Te va a ofrecer varios métodos de verificación. Elegí **"Etiqueta HTML"** — te muestra algo así:
   ```html
   <meta name="google-site-verification" content="ABC123..." />
   ```
4. Copiame solo el valor de `content` (el código, no la etiqueta completa).
5. **No hagas clic en "Verificar" todavía** — primero yo tengo que subir ese código al sitio, si no la verificación va a fallar.

## 3. Cuando me pases los dos códigos

Yo cambio dos líneas en `lib/analytics.js`:

```js
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
export const GSC_VERIFICATION = 'ABC123...';
```

y con eso:
- Analytics empieza a medir todas las páginas del sitio.
- La etiqueta de verificación de Search Console queda en el `<head>` de todas las páginas.

Recién ahí volvés a Search Console y hacés clic en **"Verificar"** — debería confirmar al instante. Después, en Search Console, andá a **Sitemaps** (menú izquierdo) y agregá `sitemap.xml` — ya está armado con las 43 páginas del sitio, así Google las indexa más rápido.

## Nota

Esto solo funciona una vez que el sitio esté desplegado en `www.hotelessavoia.com` (no en el link de prueba de Vercel) — Search Console verifica el dominio real, y Analytics solo mide tráfico real de visitantes, no lo vas a ver activarse mientras probás en local.
