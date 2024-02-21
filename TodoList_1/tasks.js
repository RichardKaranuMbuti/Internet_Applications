const submit = document.getElementById('submit');
const newTask = document.getElementById('task');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into input field
newTask.addEventListener('input', function(){
    // Enable the submit button
    submit.disabled = false;
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault(); // prevent default submission

    const taskContent = newTask.value.trim();

    if(taskContent) {
        // Create a list item for the new task
        const listItem = document.createElement('li');
        listItem.textContent = taskContent;

        // Add new element to our unordered list
        document.getElementById('tasks').append(listItem);

        // Clear the input field after adding the task
        newTask.value = '';
        submit.disabled = true;  //disable the submit button again
       }
       return false; //prevent default form action
} );
