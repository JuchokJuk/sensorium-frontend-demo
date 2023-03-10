FROM node:18.0.0-alpine as builder

WORKDIR /usr/src/app/frontend
ENV PATH /usr/src/app/frontend/node_modules/.bin:$PATH

COPY frontend .
RUN yarn install
RUN yarn build


FROM nginx:latest
WORKDIR /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
USER nginx

COPY --chown=nginx:nginx --from=builder /usr/src/app/frontend/build ./
