import addToList from './add-to-list.js';
import TaskList from './tasklist.js';

test('add item', () => {
  // Arrange
  const taskList = new TaskList();
  const newTask = 'homework';

  // Act
  addToList(taskList, newTask);

  // Asses
  expect(taskList.list[taskList.list.length - 1].description).toBe(newTask);
});