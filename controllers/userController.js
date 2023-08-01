const userModel = require('../models/userModel');

// Obtener todos los usuarios
function getAllUsers(req, res) {
  const users = userModel.getAllUsers();
  res.json(users);
}

// Obtener un usuario por su ID
function getUserById(req, res) {
  const userId = parseInt(req.params.id);
  const user = userModel.getUserById(userId);
  res.json(user);
}

// Crear un nuevo usuario
function createUser(req, res) {
  const newUser = userModel.createUser(req.body);
  res.json(newUser);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
