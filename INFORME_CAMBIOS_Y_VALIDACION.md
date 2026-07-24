# RCO & Asociados — Informe de cambios y validación

## Cambios aplicados

- Restauración del logo oficial en el encabezado y metadatos del sitio.
- Normalización UTF-8 de los textos y traducciones en español, portugués e inglés.
- Recuperación de la fotografía de la familia en la playa.
- Conservación de las fotografías originales de la versión maestra: reunión y apretón de manos, oficina, servicios, RCO Living y destinos.
- Ajuste acotado del encuadre de la portada para mostrar una porción mayor de la escena original.
- Conservación de la paleta acero, negro y naranja.
- Mantenimiento de la estructura institucional en la raíz y RCO Living dentro de `/living/`.
- Revisión de enlaces y recursos relativos.

## Validación local

Validación realizada en un servidor local de Windows y en navegador:

- `/` — carga correcta, logo y fotografías cargadas, sin caracteres dañados.
- `/living/` — carga correcta, sin imágenes rotas ni caracteres dañados.
- `/living/login.html` — carga correcta, sin imágenes rotas ni caracteres dañados.
- Español, portugués e inglés — cambio de idioma comprobado, sin caracteres de reemplazo.
- Consola del navegador — sin errores ni advertencias durante las pruebas.
- Archivos enlazados — sin referencias locales faltantes en las tres rutas principales.

## Publicación

El contenido del ZIP debe subirse directamente a la raíz del repositorio. `index.html`, `vercel.json` y la carpeta `living` deben quedar al mismo nivel.
