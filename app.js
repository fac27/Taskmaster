// Todo list tasks
const tasks = [];

const todoSection = document.querySelector('.todo-section');
const todoContainer = document.querySelector('.todos');
const formContainer = document.querySelector('.forms');

// ----------------------------
// display the tasks on the page
const displayTasks = (tasks) => {
  const { task } = tasks;

  const todoTemplate = document.querySelector('#todo-template');
  const domFragment = todoTemplate.content.cloneNode(true);

  // add task task into the element
  domFragment.querySelector('.task').textContent = task;

  // add the fragment into the document
  todoContainer.appendChild(domFragment);
};

// ----------------------------
// create tasks dynamically and add them to array using template
const addTask = (task) => {
  tasks.push(task);
};

const createTask = () => {
  // clear the canvas first
  formContainer.innerHTML = '';

  const formTemplate = document.querySelector('#form-template');
  const domFragment = formTemplate.content.cloneNode(true);

  // display the template form.
  formContainer.appendChild(domFragment);

  const taskInput = document.querySelector('.task-input');
  const submitTaskBtn = document.querySelector('.submit-task');

  // create a task once user clicks submit
  submitTaskBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    // get a unique id to attach to each task
    const response = await fetch('https://www.uuidgenerator.net/api/version1', {
      headers: { Accept: 'application/json' },
    });
    const responseJson = await response.json();
    const id = responseJson[0];

    const taskValue = taskInput.value;
    const done = false;

    const task = { id, task: taskValue, done };

    // add the task to the list
    addTask(task);

    // clear the previous tasks first before updating
    todoContainer.innerHTML = '';
    tasks.forEach(displayTasks);

    // hide/delete the task form
    document.querySelector('.task-form').style.display = 'none';
  });
};

document.querySelector('.add-task').addEventListener('click', createTask);

// const markTaskAsComplete = () => {};

// const deleteTask = () => {};
