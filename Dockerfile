# Dockerfile (tag: v3)
FROM nginx

COPY config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /gestion-personnes-react
ADD build /gestion-personnes-react

EXPOSE 8080
