FROM node:18.16-alpine

WORKDIR usr/api

COPY package*.json ./

EXPOSE 3001

COPY . .

RUN npm i

CMD ["npm", "run", "prod"]

