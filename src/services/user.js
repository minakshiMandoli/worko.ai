const UserDAO = require("../dao/user");
const UserDTO = require("../dto/user");
const { defaultStatus } = require("../config/options");
exports.createUser = async (userData) => {
  const user = await UserDAO.create(userData);
  return UserDTO.createUpdate(user);
};

exports.getAllUsers = async (query) => {
  const users = await UserDAO.findAll(query);
  const list = Promise.all(users.map(async (user) => UserDTO.list(user)));

  return list;
};
exports.getUserById = async (id) => {
  const user = await UserDAO.findById(id);
  return user ? UserDTO.view(user) : null;
};
exports.getOneUser = async (query) => {
  const user = await UserDAO.findOne(query);
  return user ? UserDTO.view(user) : null;
};

exports.updateUser = async (id, userData) => {
  const user = await UserDAO.updateUser(
    { _id: id, status: { $ne: defaultStatus.DELETED } },
    userData
  );
  return user ? UserDTO.createUpdate(user) : null;
};

exports.deleteUser = async (id) => {
  const user = await UserDAO.deleteUser({
    _id: id,
    status: { $ne: defaultStatus.DELETED },
  });

  return user ? UserDTO.view(user) : null;
};
exports.checkDuplicate = async (body, id) => {
  try {
    return await UserDAO.findOne({
      email: body.email,
      ...(id && { _id: { $ne: id } }),
    });
  } catch (error) {}
};
