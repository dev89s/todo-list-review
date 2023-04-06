class TaskList {
  list = [];

  constructor() {
    this.list = [];
  }

  addTask = (description, completed = false) => {
    const task = {
      description,
      completed,
      index: this.list.length + 1,
    };
    this.list.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  removeTask = (index) => {
    this.list.splice(index - 1, 1);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i + 1;
    }
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  editTask = (index, newValue) => {
    this.list[index - 1].description = newValue;
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }
}

export default TaskList;