# Informe de validación

Fecha: 23 de julio de 2026

## Resultado

- `/` abre la web institucional de **RCO & Asociados**.
- `/living/` abre la portada independiente de **RCO Living**.
- `/living/login.html` permite iniciar la demostración y redirige a `/living/control.html`.
- Navegación local: 13 archivos HTML revisados, sin enlaces internos rotos.
- JavaScript: todos los archivos superaron la comprobación de sintaxis.
- Idiomas: selector ES/PT/EN probado en la portada institucional.
- WhatsApp: número unificado como `+55 81 99899 1468`.
- Responsive: raíz y Living probados a 390 × 844 px, sin desplazamiento horizontal.
- Consola: sin errores ni advertencias en la portada de Living.
- Vercel: `vercel.json` incluido; Root Directory debe ser `./`.
- Nginx: configuración incluida en `nginx-rcoasociados.conf`.

## Seguridad

El login actual de RCO Living es una demostración en el navegador. No almacenar datos sensibles hasta conectar autenticación, base de datos y almacenamiento del lado del servidor.
