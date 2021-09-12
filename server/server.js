// require express - provides a function
const express = require('express');

// call function
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// redirect traffic and serves files
app.use(express.static('server/public'));

// saves our task.router as a variable
const tasksRouter = require('./routes/tasks.router.js');

app.use('/tasks', tasksRouter);

// tells our server to listen at our PORT 
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});