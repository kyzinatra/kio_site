FROM node:18-alpine AS BUILD

WORKDIR /app
COPY . /app

RUN node /app/common/scripts/install-run-rush.js install
RUN node /app/common/scripts/install-run-rush.js rebuild

ADD ./data/import/realm-export.json /data/