// ----------------------------
// Todo list tasks
let tasks = [];

const todoSection = document.querySelector('.todo-section');
const todoContainer = document.querySelector('.todos');
const formContainer = document.querySelector('.forms');

// ----------------------------
// display the tasks on the page
const updateTasks = (todos) => {
  const { task, done } = todos;

  const todoTemplate = document.querySelector('#todo-template');
  const domFragment = todoTemplate.content.cloneNode(true);

  domFragment.querySelector('.task').textContent = task;
  done ? domFragment.querySelector('.task').classList.add('done') : null;
  done ? (domFragment.querySelector('#checkbox').checked = true) : null;

  // add event listener to delete the task
  const deleteBtn = domFragment.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () =>
    deleteTask(getTaskText(deleteBtn, 'button'))
  );

  // add event listener for editing a task
  const editBtn = domFragment.querySelector('.edit-btn');
  editBtn.addEventListener('click', () =>
    editTask(getTaskText(editBtn, 'button'))
  );

  // add event listener to toggle the checkbox
  const checkbox = domFragment.querySelector('#checkbox');
  checkbox.addEventListener('click', () => {
    const [taskText, status] = getTaskText(checkbox, 'input');
    toggleCheckbox(taskText, status);
  });

  // insert article into dom
  todoContainer.appendChild(domFragment);
};

// ----------------------------
// toggle between the filters
const getAllTasks = () => {
  todoContainer.innerHTML = '';
  tasks.forEach(updateTasks);
};

const getPendingTasks = () => {
  const newTasks = tasks.filter((task) => !task.done);
  todoContainer.innerHTML = '';
  newTasks.forEach(updateTasks);
};

const getCompletedTasks = () => {
  const newTasks = tasks.filter((task) => task.done);
  todoContainer.innerHTML = '';
  newTasks.forEach(updateTasks);
};

const toggleFilters = (active, btn2, btn3) => {
  active.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
};

const allFilterBtn = document.querySelector('.all-filter');
const pendingFilterBtn = document.querySelector('.pending-filter');
const completedFilterBtn = document.querySelector('.completed-filter');
const clearAllBtn = document.querySelector('.clear-tasks');

allFilterBtn.addEventListener('click', () => {
  toggleFilters(allFilterBtn, pendingFilterBtn, completedFilterBtn);
  getAllTasks();
});

pendingFilterBtn.addEventListener('click', () => {
  toggleFilters(pendingFilterBtn, allFilterBtn, completedFilterBtn);
  getPendingTasks();
});

completedFilterBtn.addEventListener('click', () => {
  toggleFilters(completedFilterBtn, pendingFilterBtn, allFilterBtn);
  getCompletedTasks();
});

// clear all tasks
clearAllBtn.addEventListener('click', () => {
  tasks = [];
  todoContainer.innerHTML = '';
});

// ----------------------------
// add tasks
const addTask = (e) => {
  e.preventDefault();

  const taskValue = document.querySelector('.task-input').value;

  if (taskIsUnique(taskValue)) {
    const done = false;
    const task = { task: taskValue, done };

    tasks.push(task);
    e.target.reset();

    // clear the previous tasks first before updating
    todoContainer.innerHTML = '';
    tasks.forEach(updateTasks);
  } else {
    const erroDiv = document.querySelector('.error-div');
    erroDiv.innerHTML = '';

    const errorMessageElement = document.createElement('p');
    errorMessageElement.className = 'error';
    errorMessageElement.textContent = 'tasks must be unique';

    erroDiv.append(errorMessageElement);

    setTimeout(
      () => (document.querySelector('.error').style.display = 'none'),
      2000
    );
  }
};

const taskIsUnique = (taskText) => {
  return tasks.filter((task) => task.task === taskText).length < 1;
};

document.querySelector('.task-form').addEventListener('submit', addTask);

// ----------------------------
// delete tasks from list and array
const getTaskText = (el, type) => {
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

  todoContainer.innerHTML = '';
  tasks.forEach(updateTasks);
};

// ----------------------------
// edit tasks
const editTask = (taskText) => {
  const inputElement = document.querySelector('.task-input');
  inputElement.value = taskText;
  inputElement.focus();
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
