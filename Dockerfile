FROM node:18-alpine AS BUILD

WORKDIR /app
COPY . /app

# Разберись пж почему твои комманды не работают и нужны ли они вообще
# RUN node /app/common/scripts/install-run-rush.js install
# RUN node /app/common/scripts/install-run-rush.js rebuild
# RUN cd /app/packages/frontend && npm install && npm run build


FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./cert /etc/nginx
COPY --from=build /app/packages/frontend/dist /usr/share/nginx/html
