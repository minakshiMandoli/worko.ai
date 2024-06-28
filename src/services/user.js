const UserDAO = require("../dao/user");
const UserDTO = require("../dto/user");
const { defaultStatus } = require("../config/options");
exports.createUser = async (userData) => {
  const user = await UserDAO.create(userData);
  return new UserDTO(user);
};

exports.getAllUsers = async (query) => {
  const users = await UserDAO.findAll(query);
  return users.map((user) => new UserDTO(user));
};
exports.getUserById = async (id) => {
  const user = await UserDAO.findById(id);
  return user ? new UserDTO(user) : null;
};
exports.getOneUser = async (query) => {
  const user = await UserDAO.findOne(query);
  return user ? new UserDTO(user) : null;
};
exports.getUserById = async (id) => {
  const user = await UserDAO.findById(id);
  return user ? new UserDTO(user) : null;
};

exports.updateUser = async (id, userData) => {
  const user = await UserDAO.update(id, userData);
  return user ? new UserDTO(user) : null;
};

exports.deleteUser = async (id) => {
  const user = await UserDAO.softDelete({
    _id: id,
    status: defaultStatus.DELETED,
  });

  return user ? new UserDTO(user) : null;
};
