# Proyecto de Servidor Node.js con JSONDB y Patrón MVC

Este es un servidor Node.js que utiliza un JSONDB simulado y sigue el patrón Modelo-Vista-Controlador (MVC). El servidor proporciona las siguientes rutas para gestionar usuarios y sus tareas (todos):

- GET /users: Obtiene un listado de todos los usuarios del sistema.
- GET /users/:id: Obtiene un usuario específico por su ID.
- POST /users: Crea un nuevo usuario en el sistema.
- GET /users/:id/todos: Obtiene todos los "todos" de un usuario por su ID.
- GET /todos/:id: Obtiene un "todo" por su ID con sus tareas.
- POST /todos/:id/task: Crea una nueva tarea (pendiente) para un "todo".

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona este repositorio o descarga los archivos del proyecto.

```bash
git clone https://github.com/tu_usuario/nombre_proyecto.git
cd nombre_proyecto
```

3. Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```

## Inicialización del Servidor

1. Asegúrate de que estás dentro de la carpeta del proyecto.
2. Inicia el servidor Node.js ejecutando el siguiente comando:

```bash
node server.js
```

El servidor se ejecutará en el puerto 5000 y estará listo para recibir peticiones.

## Uso del API

Una vez que el servidor está en funcionamiento, puedes realizar peticiones utilizando herramientas como `curl` o aplicaciones como Postman. A continuación, se muestran algunos ejemplos de uso del API:

- Obtener todos los usuarios:

  ```
  GET http://localhost:5000/users
  ```

- Obtener un usuario por su ID:

  ```
  GET http://localhost:5000/users/1
  ```

- Crear un nuevo usuario:

  ```
  POST http://localhost:5000/users

  Payload:
  {
    "firstName": "Nombre",
    "lastName": "Apellido",
    "email": "correo@example.com"
  }
  ```

- Obtener todos los "todos" de un usuario por su ID:

  ```
  GET http://localhost:5000/users/1/todos
  ```

- Obtener un "todo" por su ID con sus tareas:

  ```
  GET http://localhost:5000/todos/1
  ```

- Crear una nueva tarea (pendiente) para un "todo":

  ```
  POST http://localhost:5000/todos/1/task

  Payload:
  {
    "title": "Título de la tarea",
    "completed": false
  }
  ```

## Notas

- Este proyecto utiliza un JSONDB simulado y no es adecuado para un entorno de producción real. En una aplicación real, deberías utilizar una base de datos adecuada para almacenar y gestionar los datos de manera segura y eficiente.
- Si deseas modificar los datos simulados, puedes hacerlo editando el archivo `db.json`.

