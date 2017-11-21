# Dockerfile (tag: v3)
FROM nginx

COPY config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /gestion-personnes
COPY build /gestion-personnes/

EXPOSE 8080
