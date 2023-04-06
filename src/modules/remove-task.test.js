import removeTask from './remove-task.js';
import addTask from './add-to-list.js';
import TaskList from './tasklist.js';

describe('remove task function tests', () => {
  test('remove item works', () => {
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
    expect(taskList.list[index].index).toBe(tasks.indexOf('library'));
  });

  test('remove last item works', () => {
    // Arrange
    const taskList = new TaskList();
    const tasks = ['homework', 'books', 'library'];

    tasks.forEach((task) => {
      addTask(taskList, task);
    });

    // Act
    const index = tasks.length;
    removeTask(taskList, index);
    tasks.splice(tasks.length - 1, 1);

    // Asses
    tasks.forEach((task, i) => {
      expect(taskList.list[i].description).toBe(task);
    });
  });

  test('remove single item', () => {
    // Arrange
    const taskList = new TaskList();
    const tasks = ['homework'];

    tasks.forEach((task) => {
      addTask(taskList, task);
    });

    // Act
    const index = tasks.length;
    removeTask(taskList, index);
    tasks.splice(index - 1, 1);

    // Asses
    expect(taskList.list.length).toBe(tasks.length);
  });
});