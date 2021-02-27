FROM node:lts-alpine3.12

WORKDIR /app
COPY . /app

RUN addgroup standardUser && adduser -S -G standardUser standardUser && \
    npm i && \
    chown standardUser:standardUser /app && \
    chown standardUser:standardUser /app/node_modules -R && \
    npm run build

USER standardUser

CMD ["npm", "start"]
