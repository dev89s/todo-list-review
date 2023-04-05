import loadTasksToList from './load-tasks.js';
/**
 *
 * @param {TaskList} tasklist
 * @param {String} newTask
 */
const addToList = (tasklist, newTask) => {
  tasklist.addTask(newTask);
};

export default addToList;
module.exports = addToList;