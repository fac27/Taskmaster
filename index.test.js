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

function addTaskTest() {
  // Find the add new task input element
  const addNewTask = document.querySelector('.task-input');

  // Set the values of the input elements
  addNewTask.value = 'Mop the floor';

  // Find the 'submit' button
  const submitButton = document.querySelector('.add-task');

  // Simulate a click event on the submit button
  submitButton.click();

  // Find the 'result' element
  const resultElement = todoContainer.querySelector('.todo-list');

  // Check if the text content of the 'result' element matches the expected value
  if (resultElement.textContent.includes(addNewTask.value)) {
    console.log('Test passed: Task added successfully');
  } else {
    console.error('Test failed.');
  }

}

addTaskTest();

function editTaskTest() {
  // Find the add new task input element
  const addNewTask = document.querySelector('.task-input');

  // Set the values of the input elements
  addNewTask.value = 'Mop the floor';

  // Find the 'submit' button
  const submitButton = document.querySelector('.add-task');

  // Simulate a click event on the submit button
  submitButton.click();

  // Find the 'result' element
  const resultElement = todoContainer.querySelector('.todo-list');

  // Find the edit button of the task
  const editButton = resultElement.querySelector('.edit-btn');

  // Simulate a click event on the edit button
  editButton.click();

  // Change the value entered in add new task
  addNewTask.value = 'Vacuum the floor';

  // Simulate a click event on the submit button to save the changes
  submitButton.click();

  // Find the task element
  const taskElement = resultElement.querySelector('.task');

  // Check if the text content of the task element matches the expected value
  if (taskElement.textContent === 'Vacuum the floor') {
    console.log('Test passed: Task edited successfully!');
  } else {
    console.error(`Task edit failed. Expected "Vacuum the floor", but got "${taskElement.textContent}"`);
  }
}

editTaskTest();

function deleteTaskTest() {
  // Find the add new task input element
  const addNewTask = document.querySelector('.task-input');

  // Set the values of the input elements
  addNewTask.value = 'Mop the floor';

  // Find the 'submit' button
  const submitButton = document.querySelector('.add-task');

  // Simulate a click event on the submit button
  submitButton.click();

  // Find the 'result' element
  const resultElement = todoContainer.querySelector('.todo-list');

  // Find the delete button of the task
  const deleteButton = resultElement.querySelector('.delete-btn');

  // Simulate a click event on the delete button
  deleteButton.click();

  // Check if the task element no longer exists in the DOM
  const taskElement = resultElement.querySelector('.task');
  if (taskElement === null) {
    console.log('Task deleted successfully!');
  } else {
    console.error('Task delete failed. Task element still exists in the DOM.');
  }
}

deleteTaskTest()