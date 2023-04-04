import loadTasksToList from './load-tasks.js';
/**
 *
 * @param {TaskList} tasklist
 * @param {String} newTask
 */
const addToList = (tasklist, newTask) => {
  tasklist.addTask(newTask);
  loadTasksToList(tasklist);
};

export default addToList;