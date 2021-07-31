import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const http = require('http');
// Express configuration
const express = require('express');
const app = express();

require('dotenv').config();

import { firebase } from '@firebase/app';
import '@firebase/database';

// Setting firebase configuration
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
firebase.initializeApp(firebaseConfig);
const db = firebase.database()

export { db }

app.use((req, res, next) => {
    console.log('Setting up firebase connection middleware');
    next();
});

app.get('/recommend', (req, res, next) => {
    let results = [];
    const threads = firebase.database().ref();
    const query = threads.limitToFirst(2);
    query.on('value', snap => {
        console.log(snap.length);
        res.send(snap.val());
    })
});

const server = http.createServer(app);

server.listen(3000);
