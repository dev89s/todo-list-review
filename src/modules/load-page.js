import returnIcon from '../assets/return.png';
import addToList from './add-to-list.js';
import loadTasksToList from './load-tasks.js';
import { clearAllDone } from './status-update.js';

const loadPage = (tasklist) => {
  const toDoListContainer = document.querySelector('.todolist-container');
  const taskListContainer = document.querySelector('.todolist');
  taskListContainer.textContent = '';

  //* New Task text input creation
  const newTask = document.createElement('span');
  newTask.classList.add('new-task');

  const textBox = document.createElement('input');
  textBox.setAttribute('placeholder', 'Add to your list...');
  textBox.classList.add('new-task-input');
  newTask.appendChild(textBox);

  const returnBtn = document.createElement('button');
  returnBtn.classList.add('return-btn');
  returnBtn.style.backgroundImage = `url('${returnIcon}')`;
  newTask.appendChild(returnBtn);

  toDoListContainer.insertBefore(newTask, taskListContainer);

  //* Eventlisteners for adding new tasks
  const newTaskInput = document.querySelector('.new-task-input');
  newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && newTaskInput.value !== '') {
      addToList(tasklist, newTaskInput.value);
      loadTasksToList(tasklist);
      newTaskInput.value = '';
    }
  });
  returnBtn.addEventListener('click', () => {
    if (newTaskInput.value !== '') {
      addToList(tasklist, newTaskInput.value);
      loadTasksToList(tasklist);
      newTaskInput.value = '';
    }
  });

  //* produce the task list
  loadTasksToList(tasklist);

  //* Completed task clear button at the bottom
  const tasklistClear = document.createElement('li');
  tasklistClear.classList.add('tasklist-clear-completed');
  const taskClearSpan = document.createElement('span');
  taskClearSpan.textContent = 'Clear all completed';
  tasklistClear.appendChild(taskClearSpan);

  toDoListContainer.appendChild(tasklistClear);

  //* Task clear Event
  taskClearSpan.addEventListener('click', () => {
    clearAllDone(tasklist);
    loadTasksToList(tasklist);
  });
};

export default loadPage;