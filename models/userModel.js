const db = require('../db.json');

function getAllUsers() {
  return db.users;
}

function getUserById(userId) {
  return db.users.find((user) => user.id === userId);
}

function createUser(user) {
  const newUser = { ...user, id: Date.now() };
  db.users.push(newUser);
  return newUser;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
