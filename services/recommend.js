import express from 'express';
const router = express.Router();

import db from '../config/firebase';

router.get('/recommend', (req, res, next) => {
    let results = [];
    const threads = db.ref();
    const query = threads.limitToFirst(2);
    query.on('value', snap => {
        res.send(snap.val());
    })
});

export default router;