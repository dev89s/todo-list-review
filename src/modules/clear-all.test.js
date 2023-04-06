import { clearAllDone, completeTask } from './status-update.js';
import addToList from './add-to-list.js';
import TaskList from './tasklist.js';

describe('Clear All function test', () => {

  test('clear All function works', () => {
    // Arrange
    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'coding', 'reading'];
    tasks.forEach((task) => {
      addToList(tasklist, task);
    });
    completeTask(tasklist, 1);
    completeTask(tasklist, 3);

    // Act
    clearAllDone(tasklist);
    
    // Asses
    expect(tasklist.list.length).toBe(2);
  });

});