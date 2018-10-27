FROM node:10.12
MAINTAINER Marko Pandurovic "marko.pandurovic.dev@gmail.com"

WORKDIR /var/www/app
COPY ./src ./src
COPY ./package.json ./webpack* ./.babelrc ./.eslintrc.json ./

# Setting registry should speed things up when building the image
RUN npm config set registry http://registry.npmjs.org/ && npm install && npm run build