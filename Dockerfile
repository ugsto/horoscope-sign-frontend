FROM node:18-alpine AS build

USER node

COPY --chown=node:node . /app
WORKDIR /app

RUN yarn install --frozen-lockfile && yarn build:prod

FROM alpine:latest AS cert

WORKDIR /certs

RUN apk --no-cache add openssl

RUN addgroup -g 1000 -S ssl && \
    adduser -u 1000 -S ssl -G ssl && \
    chown -R ssl:ssl /certs

USER ssl

RUN openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt -subj "/C=US/ST=California/L=San Francisco/O=Example/CN=example.com" && \
    chown -R ssl:ssl /certs

FROM nginx:stable-alpine-slim

RUN > /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /var/run/nginx.pid

USER nginx

COPY --chown=nginx:nginx --from=build /app/dist /usr/share/nginx/html
COPY --chown=nginx:nginx --from=cert /certs/server.crt /etc/ssl/certs/server.crt
COPY --chown=nginx:nginx --from=cert /certs/server.key /etc/ssl/private/server.key
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080 8443

CMD ["nginx", "-g", "daemon off;"]
