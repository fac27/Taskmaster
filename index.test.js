test("Submitting a new task adds it to the list", () => {
  const oldLength = tasks.length;
  addTask({ task: "Wash dishes", taskstatus: false });
  const newLength = tasks.length;
  notEqual(newLength, oldLength);
});

test("Checking an entry marks it as complete", () => {
  const task0Status = tasks[0].taskstatus;
  markTaskAsComplete();
  equal(tasks[0].taskstatus, true);
});

test("Deleting an entry removes it from the list", () => {
  const oldLength = tasks.length;
  deleteTask();
  const newLength = tasks.length;
  notEqual(oldLength, newLength);
});