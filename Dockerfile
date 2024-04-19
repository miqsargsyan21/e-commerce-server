FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npx", "ts-node", "src/index.ts"]
