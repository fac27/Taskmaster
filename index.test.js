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
function addTaskTest() {
  const addNewTask = document.querySelector('.task-input');
  addNewTask.value = 'Mop the floor';

  const submitButton = document.querySelector('.add-task');
  submitButton.click();

  const resultElement = todoContainer.querySelector('.todo-list');

  // Check if the text content of the 'result' element matches the expected value
  if (resultElement.textContent.includes(addNewTask.value)) {
    console.log('Test passed: Task added successfully');
  } else {
    console.error('Test failed.');
  }
}

addTaskTest();

// delete a task
function deleteTaskTest() {
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

  if (!(todoText.textContent === 'Go to the gym')) {
    console.log('Task deleted successfully!');
  } else {
    console.error('Task delete failed. Task element still exists in the DOM.');
  }
}

deleteTaskTest();

function editTaskTest() {
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
  if (todoText.textContent === 'Vacuum the floor') {
    console.log('Test passed: Task edited successfully!');
  } else {
    console.error(
      `Task edit failed. Expected "Vacuum the floor", but got "${todoText.textContent}"`
    );
  }
}

editTaskTest();
