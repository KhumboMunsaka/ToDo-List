const form = document.getElementById('taskForm');
const taskInput = document.querySelector('.task-input');
const taskBar = document.querySelector('.task-bar');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  let taskDescription = taskInput.value;
  // Creating the Task
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `<div class="details">
            <input type="checkbox" name="" class="checkbox" id="checkbox" />
            <p id="task-description">${taskDescription}</p>
          </div>
          <div class="buttons">
            <button class="delete">❌</button>
          </div>
          `;
  taskInput.value = '';
  // Deleting a task
  task.querySelector('.delete').addEventListener('click', (e) => {
    task.remove(e.target);
  });
  taskBar.prepend(task);
  // Get the checkbox and the text
  const checkbox = document.getElementById('checkbox');
  const text = document.getElementById('task-description');
  // Add an event listener for the change event
  checkbox.addEventListener('change', function () {
    // Check if the checkbox is checked
    if (this.checked) {
      // Add the strike class to the text
      text.classList.add('strike');
    } else {
      // Remove the strike class from the text
      text.classList.remove('strike');
    }
  });
});

// Happy coding!
