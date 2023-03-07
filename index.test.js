test("Submitting a new task adds it to the list", () => {
  let oldLength = incomplete.length;
  addTask({ task: "Wash dishes", taskstatus: "not done" });
  let newLength = incomplete.length;
  notEqual(newLength, oldLength);
});

test("Checking an entry marks it as complete", () => {
  const incompleteLength = incomplete.length;
  const completeLength = complete.length;
  markTaskAsComplete();
  equal(incomplete.length, incompleteLength - 1);
  equal(complete.length, completeLength + 1);
});

test("Deleting an entry removes it from the list", () => {
  const incompleteLength = incomplete.length;
  const completeLength = complete.length;
  deleteTask();
  notEqual(incomplete.length, incompleteLength);
  notEqual(complete.length, completeLength);
});