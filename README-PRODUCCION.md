# RCO & Asociados — paquete de producción

## Estructura

- `/index.html`: web institucional de RCO & Asociados.
- `/living/index.html`: portada de RCO Living.
- `/living/login.html`: acceso privado demostrativo de RCO Living.

Los archivos de RCO Living permanecen exclusivamente dentro de `/living/`.

## Vercel

Importar el repositorio con **Root Directory** vacío o `./`. No seleccionar `living`.

## Nginx

Copiar el contenido completo a `/var/www/rcoasociados` y usar `nginx-rcoasociados.conf` como base del virtual host.

## Aviso de seguridad

El acceso administrativo actual es una demostración del lado del navegador. No debe utilizarse para datos sensibles hasta conectar autenticación y almacenamiento en servidor.
