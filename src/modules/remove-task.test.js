import removeTask from './remove-task.js';
import addTask from './add-to-list.js';
import TaskList from './tasklist.js';

test('remove item', () => {
  // Arrange
  const taskList = new TaskList();
  const tasks = ['homework', 'books', 'library'];

  tasks.forEach((task) => {
    addTask(taskList, task);
  });

  // Act
  const index = 1;
  removeTask(taskList, index);

  // Asses
  expect(taskList.list[index].description).toBe('library');
});