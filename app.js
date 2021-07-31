const http = require('http');
require('dotenv').config();

const express = require('express');

const app = express();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

app.use((req, res, next) => {
    console.log('Setting up firebase connection middleware');
    next();
});

app.get('/recommend', (req, res, next) => {
    res.send({apiKey: process.env.apiKey, authDomain: process.env.authDomain});
});

const server = http.createServer(app);

server.listen(3000);
