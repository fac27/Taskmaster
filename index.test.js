// test('Submitting a new task adds it to the list', () => {
//   const expected = 12;
//   addTask({ task: 'Wash dishes', done: false, id: 12 });
//   const actual = tasks.filter((task) => task.task === 'Wash dishes')[0].id;
//   equal(expected, actual);
// });

// test('Deleting an entry removes it from the list', () => {
//   const expected = [];
//   deleteTask('Go to the gym');
//   const actual = tasks.filter((task) => task.task === 'Go to the gym');
//   equal(JSON.stringify(expected), JSON.stringify(actual));
// });

// test('Checking an entry marks it as complete', () => {
//   const expected = true;
//   toggleCheckbox('wash the dishes', true);
//   const actual = tasks.filter((task) => task.task === 'wash the dishes')[0]
//     .done;
//   equal(actual, expected);
// });

// -----------------------------
// END TO END TESTS

// add a task
test('E2E test: Submitting a new task adds it to the list', () => {
  const addNewTask = document.querySelector('.task-input');
  addNewTask.value = 'Mop the floor';

  const submitButton = document.querySelector('.add-task');
  submitButton.click();

  const resultElement = todoContainer.querySelector('.todo-list');

  const expected = true;
  const actual = resultElement.textContent.includes(addNewTask.value);

  equal(expected, actual);
});

// delete a task

test('E2E test: Deleting an entry removes it from the list', () => {
  const addNewTask = document.querySelector('.task-input');
  addNewTask.value = 'Go to the gym';

  const submitButton = document.querySelector('.add-task');
  submitButton.click();

  // select the last added element on the dom
  const resultElements = todoContainer.querySelectorAll('.todo-list');
  const resultElement = resultElements[resultElements.length - 1];

  const deleteButton = resultElement.querySelector('.delete-btn');
  deleteButton.click();

  // select the updated elements on the DOM and
  // check if the todo element no longer exists in the DOM
  const todos = todoContainer.querySelectorAll('.todo-list');
  const todo = todos[todos.length - 1];
  const todoText = todo.querySelector('.task');

  const expected = true;
  const actual = !(todoText.textContent === 'Go to the gym');

  equal(expected, actual);
});

// edit a task

test('E2E test: Editing a task updates it after submission', () => {
  const addNewTask = document.querySelector('.task-input');
  addNewTask.value = 'Get Groceries';

  const submitButton = document.querySelector('.add-task');
  submitButton.click();

  // select the last added element on the dom
  const resultElements = todoContainer.querySelectorAll('.todo-list');
  const resultElement = resultElements[resultElements.length - 1];

  const editButton = resultElement.querySelector('.edit-btn');
  editButton.click();

  addNewTask.value = 'Vacuum the floor';
  submitButton.click();

  // select the updated elements on the DOM and
  // check if the todo element has been updated in the DOM
  const todos = todoContainer.querySelectorAll('.todo-list');
  const todo = todos[todos.length - 1];
  const todoText = todo.querySelector('.task');

  // Check if the text content of the task element matches the expected value
  const expected = true;
  const actual = todoText.textContent === 'Vacuum the floor';

  equal(expected, actual);
});
