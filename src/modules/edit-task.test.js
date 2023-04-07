import editTask from './edit-task.js';
import TaskList from './tasklist.js';
import addToList from './add-to-list.js';

describe('edit task test', () => {
  test('edit task works', () => {
    // Arrange
    const tasklist = new TaskList();
    addToList(tasklist, 'homework');

    // Act
    editTask(tasklist, 1, 'shopping');

    // Asses
    expect(tasklist.list[0].description).toBe('shopping');
  });

  test('edit task works on multiple entries', () => {
    // Arrange
    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'cleaning', 'reading'];
    tasks.forEach((task) => {
      addToList(tasklist, task);
    });

    // Act
    editTask(tasklist, 3, 'studying');

    // Asses
    expect(tasklist.list[2].description).toBe('studying');
  });

  test('edit task works on last entery', () => {
    // Arrange
    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'cleaning', 'reading'];
    tasks.forEach((task) => {
      addToList(tasklist, task);
    });

    // Act
    editTask(tasklist, 4, 'studying');

    // Asses
    expect(tasklist.list[tasklist.list.length - 1].description).toBe('studying');
  });
});