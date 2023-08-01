const db = require('../db.json');

function getTodosByUserId(userId) {
  return db.todos.filter((todo) => todo.userId === userId);
}

function getTodoById(todoId) {
  return db.todos.find((todo) => todo.id === todoId);
}

function getTasksByTodoId(todoId) {
  return db.tasks.filter((task) => task.todoId === todoId);
}

function createTaskForTodo(todoId, task) {
  const newTask = { ...task, id: Date.now(), todoId, userId: 1 }; // Asignamos userId=1 por simplicidad
  db.tasks.push(newTask);
  return newTask;
}

module.exports = {
  getTodosByUserId,
  getTodoById,
  getTasksByTodoId,
  createTaskForTodo,
};
