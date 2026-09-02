# Serves the static Next.js export (`next build` with output: 'export') from
# ./out. Nothing is compiled here — build the export first, then build this image.
FROM nginx:1.27-alpine-slim

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY out /usr/share/nginx/html

# nginx:alpine ships an unprivileged `nginx` user (uid 101); listening on 8080
# means no NET_BIND_SERVICE capability is needed.
RUN chown -R nginx:nginx /usr/share/nginx/html
USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=2s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
