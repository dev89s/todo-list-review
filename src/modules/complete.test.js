import { completeTask, uncompleteTask } from './status-update.js';
import TaskList from './tasklist.js';
import addToList from './add-to-list.js';

describe('task completion test', () => {
  test('task complete test', () => {
    // Arrange
    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'cleaning', 'reading'];
    tasks.forEach((task) => {
      addToList(tasklist, task);
    });

    // Act
    const index = tasks.indexOf('cleaning');
    completeTask(tasklist, index);

    // Asses
    expect(tasklist.list[index].completed).toBe(true);
  });

  test('task uncomplete test', () => {
    // Arrange
    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'cleaning', 'reading'];
    tasks.forEach((task) => {
      addToList(tasklist, task);
    });

    // Act
    const index = tasks.indexOf('cleaning');
    completeTask(tasklist, index);
    uncompleteTask(tasklist, index);

    // Asses
    expect(tasklist.list[index].completed).toBe(false);
  });
});