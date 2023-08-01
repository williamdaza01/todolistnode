const express = require("express");
const jsonServer = require("json-server");
const userController = require("./controllers/userController");
const todoController = require("./controllers/todoController");

const app = express();
const router = jsonServer.router("db.json");

const PORT = 5000;

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

// Ruta para obtener todos los usuarios
app.get("/users", userController.getAllUsers);

// Ruta para obtener un usuario por su ID
app.get("/users/:id", userController.getUserById);

// Ruta para crear un nuevo usuario
app.post("/users", userController.createUser);

// Ruta para obtener todos los "todos" de un usuario por su ID
app.get("/users/:id/todos", todoController.getTodosByUserId);

// Ruta para obtener un "todo" por su ID con sus tareas
app.get("/todos/:id", todoController.getTodoWithTasksById);

// Ruta para crear una nueva tarea (pendiente) para un "todo"
app.post("/todos/:id/task", todoController.createTaskForTodo);

// Montar el JSONDB simulado en el servidor
app.use(jsonServer.defaults());
app.use(router);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
