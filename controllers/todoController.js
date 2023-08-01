const todoModel = require('../models/todoModel');

// Obtener todos los "todos" de un usuario por su ID
function getTodosByUserId(req, res) {
  const userId = parseInt(req.params.id);
  const todos = todoModel.getTodosByUserId(userId);
  res.json(todos);
}

// Obtener un "todo" por su ID con sus tareas
function getTodoWithTasksById(req, res) {
  const todoId = parseInt(req.params.id);
  const todo = todoModel.getTodoById(todoId);
  const tasks = todoModel.getTasksByTodoId(todoId);
  res.json({ ...todo, todos: tasks });
}

// Crear una nueva tarea (pendiente) para un "todo"
function createTaskForTodo(req, res) {
  const todoId = parseInt(req.params.id);
  const newTask = todoModel.createTaskForTodo(todoId, req.body);
  res.json(newTask);
}

module.exports = {
  getTodosByUserId,
  getTodoWithTasksById,
  createTaskForTodo,
};
