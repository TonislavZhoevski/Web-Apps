const express = require('express');

const app = express();

app.use(middleware1);

function middleware1 (req, res, next) {
  console.log('I am a middleware');
  next();
}

function standartExpressCallback(requestObject, responseObject, nextMiddleware) {
  console.log('I am the standart Express function');
  responseObject.send('<h1>Hello World</h1>');
}

app.get('/', standartExpressCallback);

app.listen(3000);