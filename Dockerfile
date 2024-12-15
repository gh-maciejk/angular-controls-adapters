FROM node:20 as build

WORKDIR /usr/local/app/build

COPY / /usr/local/app/build
RUN rm -rf /usr/local/app/build/dist
RUN rm -rf /usr/local/app/build/tmp
RUN rm -rf /usr/local/app/build/.nx
RUN rm -rf /usr/local/app/build/.angular
RUN rm -rf /usr/local/app/build/.vscode
RUN rm -rf /usr/local/app/build/node_modules

RUN npm install --include=optional
RUN npx nx run angular-shell-controls:build --configuration=production

FROM node:20

EXPOSE 80

ENV NODE_OPTIONS=--max-old-space-size=4200
ENV NODE_ENV production
ENV PORT 80
ENV HOST 0.0.0.0

WORKDIR /usr/local/app

COPY --from=build /usr/local/app/build/dist/apps/angular-shell-controls /usr/local/app

CMD [ "node", "/usr/local/app/server/server.mjs" ]
