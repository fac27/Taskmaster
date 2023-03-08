test('Submitting a new task adds it to the list', () => {
  const actual = 12;
  addTask({ task: 'Wash dishes', done: false, id: 12 });
  const expected = tasks.filter((task) => task.task === 'Wash dishes')[0].id;
  equal(expected, actual);
});

// test("Checking an entry marks it as complete", () => {
//   const task0Status = tasks[0].taskstatus;
//   markTaskAsComplete();
//   equal(tasks[0].taskstatus, true);
// });

// test("Deleting an entry removes it from the list", () => {
//   const oldLength = tasks.length;
//   deleteTask();
//   const newLength = tasks.length;
//   notEqual(oldLength, newLength);
// });
