const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

const tasksRouter = require('./routes/tasks.router');

app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});