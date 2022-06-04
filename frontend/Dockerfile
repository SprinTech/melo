FROM node:alpine3.15

WORKDIR app/frontend

COPY package.json package-lock.json ./

RUN npm install 

COPY . ./

EXPOSE 8080