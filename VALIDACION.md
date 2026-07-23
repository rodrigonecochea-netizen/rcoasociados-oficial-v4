# Informe de validación

Fecha: 23 de julio de 2026

## Resultado

- `/` abre exclusivamente la web institucional de **RCO & Asociados**.
- `/living/` abre la portada independiente de **RCO Living**.
- `/living/login.html` carga el acceso privado y el flujo de demostración dirige a `/living/control.html`.
- Se revisaron 13 archivos HTML y no se detectaron enlaces internos rotos.
- Los archivos JavaScript superaron la comprobación de sintaxis.
- El selector ES/PT/EN actualiza la navegación, los textos, la descripción SEO y los mensajes de WhatsApp.
- El número de WhatsApp está unificado como `+55 81 99899 1468`.
- La portada institucional y RCO Living fueron revisadas a 390 × 844 px sin desplazamiento horizontal.
- La navegación local no produjo errores de JavaScript.
- Se incorporaron accesibilidad de teclado, foco visible y respeto por la preferencia de movimiento reducido.
- Se añadió marcado estructurado de organización, metadatos sociales y carga diferida de imágenes secundarias.
- `vercel.json` está incluido; en Vercel el **Root Directory** debe ser `./`.
- La configuración de Nginx está incluida en `nginx-rcoasociados.conf`.

## Seguridad

El login actual de RCO Living es una demostración ejecutada en el navegador. No se deben almacenar datos sensibles hasta conectar autenticación, base de datos y almacenamiento del lado del servidor.
