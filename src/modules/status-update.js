const completeTask = (tasklist, index) => {
  tasklist.list[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasklist.list));
};

const uncompleteTask = (tasklist, index) => {
  tasklist.list[index].completed = false;
  localStorage.setItem('tasks', JSON.stringify(tasklist.list));
};
/**
 *
 * @param {TaskList} tasklist
 */
const clearAllDone = (tasklist) => {
  tasklist.list = tasklist.list.filter((task) => !task.completed);
  for (let i = 0; i < tasklist.list.length; i += 1) {
    tasklist.list[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasklist.list));
};

export { completeTask, uncompleteTask, clearAllDone };
