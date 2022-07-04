FROM node:18-alpine3.14

WORKDIR app/frontend

COPY package.json package-lock.json ./

RUN npm install 

COPY . ./

EXPOSE 8080