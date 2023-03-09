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
