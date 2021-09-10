const express = require('express');
const tasksRouter = express.Router();

const pool = require('../modules/pool');

//DB CONNECTIONS

// GET
tasksRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting koalas', error);
        res.sendStatus(500);
    });
});

