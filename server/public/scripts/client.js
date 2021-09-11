$(document).ready(function(){
    console.log('jQuery sourced.');
    refreshTasks();
    addClickHandlers();
  });

function addClickHandlers() {
    console.log('In addClickHandlers');
    $('#submit-task').on('click', handleSubmit);
};

//Input values are to be place in an object prior to being appended to the DOM
function handleSubmit() {
    console.log('Submit button clicked.');
    let task = {};
    task.my_task = $('#task').val();
    addTask(task);
    $('#task').val(''); // clear input
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
                        SET task_complete to TRUE
                    </button>
                </td>
            </tr>
        `)
    }
}
