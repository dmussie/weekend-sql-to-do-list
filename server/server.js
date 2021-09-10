// require express - provides a function
const express = require('express');

// call function
const app = express();
const PORT = 5000;

// redirect traffic and serves files
app.use(express.static('server/public'));

// saves our task.router as a variable
//const tasksRouter = require('./routes/tasks.router');

//app.use('/tasks', tasksRouter);

// tells our server to listen at our PORT 
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});