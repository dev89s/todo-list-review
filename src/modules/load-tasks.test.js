import { JSDOM } from 'jsdom';
import TaskList from './tasklist.js';
import addToList from './add-to-list.js';
import loadTasksToList from './load-tasks.js';
import { completeTask } from './status-update.js';
import { experiments } from 'webpack';

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

  test('check task completion acts on tasklist', () => {
    // Arrange
    const dom = new JSDOM();
    const { document } = dom.window;
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

  test('task completion changes page', () => {
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

    // Act
    loadTasksToList(tasklist);

    // Asses
    const li = document.getElementById(index);
    const taskCheck = li.querySelector('.task-checkbox');
    taskCheck.click();
    expect(taskCheck.checked).toBe(true);
    taskCheck.click();
    expect(taskCheck.checked).toBe(false);
  });

  test('task deletion', () => {
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

    // Act
    loadTasksToList(tasklist);

    // Asses
    let li = document.getElementById(index);
    const trashBtn = li.querySelector('.trash-btn');
    trashBtn.click();
    li = document.getElementById(index);
    const description = li.querySelector('.task-input').value;
    expect(description).toBe(tasks[index]);
  });

  test('textbox focusin', () => {
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

    // Act
    loadTasksToList(tasklist);

    // Asses
    let li = document.getElementById(index);
    const textBox = li.querySelector('.task-input');
    textBox.focus();
    const threeDots = li.querySelector('.three-dots');
    const trashBtn = li.querySelector('.trash-btn');
    expect(threeDots.style.display).toBe('none');
    expect(trashBtn.style.display).toBe('flex');
  });

  test('textbox focusout', () => {
    // Arrange
    jest.useFakeTimers();
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

    // Act
    loadTasksToList(tasklist);

    // Asses
    let li = document.getElementById(index);
    const textBox = li.querySelector('.task-input');
    textBox.focus();
    textBox.value = 'something else';
    textBox.blur();
    const threeDots = li.querySelector('.three-dots');
    const trashBtn = li.querySelector('.trash-btn');
    expect(threeDots.style.display).toBe('none');
    expect(trashBtn.style.display).toBe('flex');
    setTimeout(() => {
      expect(threeDots.style.display).toBe('flex');
      expect(trashBtn.style.display).toBe('none');
    }, 500);
    expect(tasklist.list[index - 1].description).toBe('something else');
  });
});