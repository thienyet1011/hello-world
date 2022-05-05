FROM node:16.15-alpine3.14

COPY . /src
WORKDIR /src
RUN npm intall

EXPOSE 3000

CMD ["node", "app.js"]