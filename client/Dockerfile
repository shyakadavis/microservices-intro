FROM node:alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]

RUN npm install -g pnpm
RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]