// Todo list tasks
const tasks = [{ task: 'wash the dishes', done: false }];

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

  // add event listener to delete the task
  const deleteBtn = domFragment.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () =>
    deleteTask(getTaskText(deleteBtn, 'button'))
  );

  // add event listener to toggle checkbox
  const checkbox = domFragment.querySelector('#checkbox');
  checkbox.addEventListener('click', (e) => {
    const [taskText, status] = getTaskText(checkbox, 'input');
    toggleCheckbox(taskText, status);
  });

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

    const taskValue = taskInput.value;
    const done = false;
    const task = { task: taskValue, done };

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

// ----------------------------
// delete tasks from list and array
const getTaskText = (el, type) => {
  // check element type before getting task text.
  // if its input, return text and status (true || false) otherwise return text
  if (type === 'input') {
    return el.checked
      ? [el.parentElement.children[1].textContent, true]
      : [el.parentElement.children[1].textContent, false];
  } else {
    return el.parentElement.parentElement.children[1].textContent;
  }
};

const deleteTask = (taskText) => {
  const task = tasks.filter((task) => task.task === taskText)[0];
  tasks.splice(tasks.indexOf(task), 1);

  // update the page
  todoContainer.innerHTML = '';
  tasks.forEach(displayTasks);
};

// ----------------------------
// mark completed tasks
const toggleCheckbox = (taskText, status) => {
  const task = tasks.filter((task) => task.task === taskText)[0];
  task.done = status;

  const taskElement = Array.from(document.querySelectorAll('.task')).filter(
    (task) => task.textContent === taskText
  )[0];

  status
    ? taskElement.classList.add('done')
    : taskElement.classList.remove('done');
};

// ----------------------------
// edit tasks
// const editTask = (task) => {};
