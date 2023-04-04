import './style.css';
import './assets/return.png';
import loadPage from './modules/load-page.js';
import TaskList from './modules/tasklist.js';

const localData = localStorage.getItem('tasks');
const tasklist = new TaskList();
if (localData) {
  tasklist.list = JSON.parse(localData);
}
loadPage(tasklist);
