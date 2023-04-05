import removeTask from "./remove-task";
import addTask from "./add-to-list";
import TaskList from "./tasklist";

test('remove item', () => {
    // Arrange
    const taskList = new TaskList();
    const tasks = ["homework", "books", "library"];

    tasks.forEach ( (task) => {
        addTask(taskList, task)
    })

    // Act 
    let index = 1;
    removeTask(taskList, index)

    // Asses
    expect(taskList.list[index].description).toBe("library");
})