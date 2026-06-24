FROM nginx:alpine

# Configuración de nginx para escuchar en el puerto 8080 (requerido por Cloud Run)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Sitio estático
COPY . /usr/share/nginx/html

EXPOSE 8080
