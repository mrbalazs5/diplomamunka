FROM node:16.9.1-alpine

RUN mkdir /qg_app_frontend
WORKDIR /qg_app_frontend

COPY . /qg_app_frontend/

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "dev" ]