const { Router } = require('express');
const express = require('express');
const tasksRouter = express.Router();

const pool = require('../modules/pool');

//DB Connection on pool.js

// GET
tasksRouter.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "my_tasks" ORDER BY "task";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
    });
});

//POST
tasksRouter.post('/', (req, res) => {
    const newTask = req.body;
    console.log('adding task', newTask);
    const queryText = `
                        INSERT INTO "my_tasks"
                        ("task")
                        VALUES
                        ($1);
    `; // Passing req.body values through pg
    // anticipating receiving an object from the client POST req
    pool.query(queryText, [
        newTask.my_task,
        //newTask.task_complete
    ]).then((result) => { // sending success back to client
        console.log('POST new task success!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in POST', error);
        res.sendStatus(500);
    });
});

/**
 * PUT
 * Update a task to show its been completed
 * Request will include a parameter indicating what book to update - the id
 * Request body will include teh content to update - the status
 */

tasksRouter.put('/:id', (req, res) => {
    console.log(req.params);
    const taskId = req.params.id;
    const queryText = `UPDATE "my_tasks" 
                        SET "task_complete" = TRUE 
                        WHERE "id" = $1`;
    pool.query(queryText, [taskId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in /tasks PUT', error);
        res.sendStatus(500);
    });
});

/**
 * DELETE
 * Removes a task to show it's been completed 
 */

tasksRouter.delete('/:id', (req, res) => {
    console.log(req.params);
    const taskId = req.params.id;
    const queryText = 'DELETE FROM "my_tasks" WHERE "id"=$1';
    pool.query(queryText, [taskId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in /tasks DELETE', error);
        res.sendStatus(500);
    })
});

module.exports = tasksRouter;