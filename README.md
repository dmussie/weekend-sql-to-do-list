# Project Name

The To-Do App

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

### Checklist

## File Tree/Project Setup
-[x] create server folder tree and created needed files
-[x] HTML skeleton
-[x] npm init --yes and package.json
-[x] npm install express
-[x] add to .gitignore
-[x] setup express on server.js


## Database
-[x] Create Table for Tasks (DB name = tasks)
-[x] column names (as provided by client) (“id”, “my_task”, "task_complete")
-[x] database.sql with commands

## Server side(push branch and create pull request after each route)
-[x] npm install and npm install pg
-[x] link client.js to tasks.router
-[x] create a get route that retrieves all of the tasks 
-[x] create a post route that can enter a new task
-[x] create a put route that can update the “task_complete” column
-[x] create a pool to connect to the database

## Client side
-[x] finalize click listener
-[x] ajax call to GET route for updating DOM
-[x] (appending to DOM)
-[x] ajax call to POST route for adding new task
-[x] ajax call to PUT route for editing a row item
-[x] create a ‘Task Complete’ button that should indicate whether a task needs to be completed or not

## Styling
-[x] ‘Task Complete’ button should also cause a row color change when the task is complete verses not
-[x] Add background color
-[x] text color


## Description

Your project description goes here. What problem did you solve? How did you solve it?

For this project, I was able to create a personalized to-do list which incorporates the entire "full-stack". We needed a way to enable user input data on the client side to be pushed into our server and stored in a database. And then, we needed a way to retrieve that data and sent it back to the user as a list that can be actively manipulated. I created a table on the HTML webpage in which "tasks" can be appended into the by the user. Then I incorporated logic to POST our data to our server which then is sent to our database which I created on Postico. SQL logic on Postico pushes this data back into our server which is run through a specified route which selects for data we want to push back to the client. Back in the client we can now append specific data the user requests along with click handlers that the user can use to note whether a pending task has been completed or not and even allows a user to delete a row from their new table and by extention the database if a task is complete.  

CSS styling was incorporated to color a row if a task has been completed verses if it is still pending completion. Other styling such as background imagery and content positioning on the page was included for an enhanced visual experience on the webpage.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
