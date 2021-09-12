$(document).ready(function(){
    console.log('jQuery sourced.');
    refreshTasks();
    addClickHandlers();
  });

function addClickHandlers() {
    console.log('In addClickHandlers');
    $('#submit-task').on('click', postTask);
    $('#taskTableBody').on('click', '.delete-button', deleteTask);
    $('#taskTableBody').on('click', '.complete-button', setToComplete);
};

//Input values are to be place in an object prior to being appended to the DOM
function handleSubmit() {
    console.log('Submit button clicked.');
    let newTask = {};
    newTask.task = $('#task').val();
    addTask(newTask);
};

//adds a task to the database
function addTask(taskToAdd) {
    console.log('in addTask', taskToAdd);
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskToAdd,
    }).then(function(response) {
        console.log('Response from server.', response);
        refreshTasks();
    }).catch(function(error) {
        console.log('Error in POST', error);
        alert('Unable to add a task at this time. Please try again later.');
    });
}

//refreshTasks will get all tasks from the server and render to page
function refreshTasks() {
    console.log('in refreshTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function(response) {
        console.log('GET /tasks response', response);
        renderTasks(response);
    }).catch(function(error) {
        console.log('error in GET', error);
    });
};

//renderTasks will display array of tasks to the DOM
function renderTasks(response) {
    $('#taskTableBody').empty();

    for(let i = 0; i < response.length; i++) {
        let myTask = response[i];
        // For each task, append new row to table
        $('#taskTableBody').append(`
            <tr>
                <td>${myTask.task}</td>
                <td>${myTask.task_complete}</td>
                <td>
                    <button
                    data-id="${myTask.id}"
                    data-task="${myTask.task}"
                    class="delete-button">
                        Delete
                    </button>
                    <button
                    data-id="${myTask.id}"
                    data-task="${myTask.task}"
                    class="complete-button">
                        Complete
                    </button>
                </td>
            </tr>
        `)
    }
};

// deleteTask will delete a task upon clicking the delete button
function deleteTask() {
    const taskId = $(this).data('id'); //selects for task id for an appended task
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`,
    }).then(function(response) {
        console.log('Task deleted!');
        refreshTasks(); // Refresh list of tasks
    }).catch(function(error) {
        alert('something went wrong!');
        console.log('error in DELETE', error);
    });
};

// this will mark a task as complete upon click of complete_button
function setToComplete() {
    const taskId = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
    }).then(function(response) {
        console.log('Set to complete!');
        refreshTasks();
    }).catch(function(error) {
        alert('Something went wrong!');
        console.log('Error in PUT', error);
    })
};

// Creates an object for user inputs to be sent to the server
function postTask() {
    let payloadObject = {
        task: $('#task-input').val()
    }
    console.log('Calling /tasks POST', payloadObject);
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: payloadObject,
    }).then(function (response) {
       $('#task-input').val('')
       refreshTasks(); 
    }).catch(function(error) {
        alert('Something went wrong!');
        console.log('Error in POST', error);
    });
};
