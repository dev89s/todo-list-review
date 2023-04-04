/**
 *
 * @param {TaskList} tasklist
 * @param {Number} id
 * @param {String} newValue
 */
const editTask = (tasklist, id, newValue) => {
  tasklist.editTask(id, newValue);
};

export default editTask;