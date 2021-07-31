import { createRequire } from 'module';
const require = createRequire(import.meta.url);
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
const db = firebase.database();

export default db;