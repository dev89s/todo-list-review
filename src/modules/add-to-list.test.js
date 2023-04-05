import addToList from './add-to-list.js';
import TaskList from './tasklist.js';

describe('add-to-list function test', () => {
  test('add tasks works', () => {
    // Arrange
    const taskList = new TaskList();
    const newTask = 'homework';

    // Act
    addToList(taskList, newTask);

    // Asses
    expect(taskList.list[taskList.list.length - 1].description).toBe(newTask);
  });

  test('add more than one task works', () => {
    // Arrange
    const taskList = new TaskList();
    const tasks = ['shopping', 'reading', 'homework', 'library']

    // Act
    tasks.forEach((task) => {
      addToList(taskList, task);
    });

    // Asses
    tasks.forEach((task, index) => {
      expect(taskList.list[index].description).toBe(task);
    });
  });

  test('indexes are currectly set', () => {
    // Arrange
    const taskList = new TaskList();
    const tasks = ['shopping', 'reading', 'homework', 'library']

    // Act
    tasks.forEach((task) => {
      addToList(taskList, task);
    });

    // Asses
    tasks.forEach((task, i) => {
      expect(taskList.list[i].index - 1).toBe(i);
    });
  });
});