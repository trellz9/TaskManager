class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  updateTask(taskId, updatedTask) {
    this.tasks = this.tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
  }

  getTask(taskId) {
    return this.tasks.find(task => task.id === taskId);
  }

  getAllTasks() {
    return this.tasks;
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  getPendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }
}

class Task {
  constructor(id, title, description, deadline, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.completed = completed;
  }
}

// Example usage
const taskManager = new TaskManager();

const task1 = new Task(1, "Finish project", "Complete the project before the deadline", "2024-03-10", false);
const task2 = new Task(2, "Prepare presentation", "Create slides and practice presentation", "2024-03-15", false);
const task3 = new Task(3, "Send report", "Submit the project report to the supervisor", "2024-03-20", false);

taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

console.log(taskManager.getAllTasks());
console.log(taskManager.getPendingTasks());
console.log(taskManager.getCompletedTasks());
