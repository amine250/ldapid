FROM node:12.16.2-alpine

ADD src/ /app/

RUN cd /app && npm install

EXPOSE 3000
CMD [ "node", "/app/server.js" ]