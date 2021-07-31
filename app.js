const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Setting up firebase connection middleware');
    next();
});

app.get('/recommend', (req, res, next) => {
    res.send({product: 'product name'});
});

const server = http.createServer(app);

server.listen(3000);
