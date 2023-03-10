FROM node:18

WORKDIR /usr/src/app/frontend
ENV PATH /usr/src/app/frontend/node_modules/.bin:$PATH

COPY frontend/ .

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
