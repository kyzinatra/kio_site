#!/bin/bash

rush update
cd packages/backend
npm install
cd ../..
docker-compose -f frontend.docker-compose.yaml up