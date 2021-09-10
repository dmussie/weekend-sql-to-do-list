$(document).ready(function(){
    console.log('jQuery sourced.');
    refreshTasks();
    addClickHandlers();
  });

  function addClickHandlers() {
      console.log('In addClickHandlers');
      $('#submit-task').on('click', handleSubmit);
  };

  function handleSubmit() {
      console.log('Submit button clicked.');
      //let task = {};
  }

  function refreshTasks() {
      console.log('in refreshTasks');
  };