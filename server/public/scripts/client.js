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
}

function refreshTasks() {
    console.log('in refreshTasks');
};