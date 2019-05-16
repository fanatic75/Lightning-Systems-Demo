FROM node:8
WORKDIR D:\Geminid\heroku_demo
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]

