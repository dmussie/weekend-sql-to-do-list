const express = require('express');
const tasksRouter = express.Router();

const pool = require('../modules/pool');

//DB Connection on pool.js

// GET
tasksRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tasks" ORDER BY "my_task";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting koalas', error);
        res.sendStatus(500);
    });
});

//POST
tasksRouter.post('/', (req, res) => {
    const newTask = req.body;
    console.log('adding task', newTask);
    const queryText = `
                        INSERT INTO "tasks"
                        ("my_task", "task_complete")
                        VALUES
                        ($1, $2);
    `; // Passing req.body values through pg
    // anticipating receiving an object from the client POST req
    pool.query(queryText, [
        newTask.my_task,
        newTask.task_complete
    ]).then((result) => { // sending success back to client
        console.log('POST new koala success!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in POST', error);
        res.sendStatus(500);
    });
});

module.exports = tasksRouter;