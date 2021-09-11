$(document).ready(function(){
    console.log('jQuery sourced.');
    refreshTasks();
    addClickHandlers();
  });

function addClickHandlers() {
    console.log('In addClickHandlers');
    $('#submit-task').on('click', handleSubmit);
    $('#taskTableBody').on('click', '.delete-button', deleteTask);
    $('#taskTableBody').on('click', '.complete-button', setToComplete);
};

//Input values are to be place in an object prior to being appended to the DOM
function handleSubmit() {
    console.log('Submit button clicked.');
    let task = {};
    task.my_task = $('#task').val();
    addTask(task);
};

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
        console.log('GET /books response', response);
        renderTasks(response);
    }).catch(function(error) {
        console.log('error in GET', error);
    });
};

//renderTasks will display array of tasks to the DOM
function renderTasks(tasks) {
    $('#taskTableBody').empty();

    for(let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        // For each task, append new row to table
        $('#taskTableBody').append(`
            <tr>
                <td>${task.my_task}</td>
                <td>${task.task_complete}</td>
                <td>
                    <button
                    data-id="${task.id}"
                    data-my_task="${task.my_task}"
                    class="delete-button">
                        Delete
                    </button>
                    <button
                    data-id="${task.id}"
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

function postTask() {
    let payloadObject = {
        task: $('#task')
    }
    console.log('Calling /tasks POST', payloadObject);
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: payloadObject,
    }).then(function (response) {
       $('#task').val(''),
       refreshTasks(); 
    }).catch(function(error) {
        alert('Something went wrong!');
        console.log('Error in POST', error);
    })
};
