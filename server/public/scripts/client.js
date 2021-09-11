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

