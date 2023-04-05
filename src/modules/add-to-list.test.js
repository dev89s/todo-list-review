import addToList from "./add-to-list";
import TaskList from "./tasklist";

test('add item', () => {
  // Arrange
  const taskList = new TaskList();
  const newTask = 'homework';

  // Act 
  addToList(taskList, newTask);

  // Asses
  expect(taskList.list[taskList.list.length - 1].description).toBe(newTask);
})