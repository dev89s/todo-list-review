import { JSDOM } from 'jsdom';
import TaskList from './tasklist.js';
import addToList from './add-to-list.js';
import loadTasksToList from './load-tasks.js';
import { completeTask } from './status-update.js';

describe('test load-tasks DOM function', () => {
  test('function initiates properly and adds required elements', () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
    global.DOMParser = document.DOMParser;
    global.document = document;
    const todolist = document.createElement('div');
    todolist.classList.add('todolist');
    document.body.appendChild(todolist);

    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'cleaning', 'reading'];
    tasks.forEach(((task) => {
      addToList(tasklist, task);
    }));

    // Act
    loadTasksToList(tasklist);

    // Asses
    tasks.forEach((task, index) => {
      const li = document.getElementById(`${index + 1}`);
      const taskDesc = li.querySelector('.task-input').value;
      expect(taskDesc).toBe(task);
    });
  });

  test('check task completion working properly', () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
    global.DOMParser = document.DOMParser;
    global.document = document;
    const todolist = document.createElement('div');
    todolist.classList.add('todolist');
    document.body.appendChild(todolist);

    const tasklist = new TaskList();
    const tasks = ['homework', 'shopping', 'cleaning', 'reading'];
    tasks.forEach(((task) => {
      addToList(tasklist, task);
    }));
    const index = 2;
    completeTask(tasklist, index - 1);

    // Act
    loadTasksToList(tasklist);

    // Asses
    const li = document.getElementById(index);
    const taskCheck = li.querySelector('.task-checkbox');
    expect(taskCheck.checked).toBe(true);
  });
});