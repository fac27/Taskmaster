test('Submitting a new task adds it to the list', () => {
  const actual = 12;
  addTask({ task: 'Wash dishes', done: false, id: 12 });
  const expected = tasks.filter((task) => task.task === 'Wash dishes')[0].id;
  equal(expected, actual);
});

test('Deleting an entry removes it from the list', () => {
  const actual = [];
  deleteTask('Go to the gym');
  const expected = tasks.filter((task) => task.task === 'Go to the gym');
  equal(JSON.stringify(actual), JSON.stringify(expected));
});

// test("Checking an entry marks it as complete", () => {
//   const task0Status = tasks[0].taskstatus;
//   markTaskAsComplete();
//   equal(tasks[0].taskstatus, true);
// });
