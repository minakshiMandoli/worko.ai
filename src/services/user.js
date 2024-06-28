const UserDAO = require("../dao/user");
const UserDTO = require("../dto/user");

exports.createUser = async (userData) => {
  const user = await UserDAO.create(userData);
  return new UserDTO(user);
};

exports.getAllUsers = async () => {
  const users = await UserDAO.findAll();
  return users.map((user) => new UserDTO(user));
};
