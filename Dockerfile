FROM node:alpine

RUN apk update && apk upgrade \
  && apk add --no-cache git \
  && apk --no-cache add --virtual builds-deps build-base python

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g nodemon cross-env eslint npm-run-all node-gyp node-pre-gyp \
  && npm install\
  && npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
