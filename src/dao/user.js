const { defaultStatus } = require("../config/options");
const User = require("../models/user");

exports.create = async (userData) => {
  return await User.create(userData);
};

exports.findAll = async (query) => {
  return await User.find(query);
};

exports.findOne = async (query) => {
  return await User.findOne(query);
};
exports.findById = async (id) => {
  return await User.findById(id);
};

exports.deleteUser = async (filter) => {
  return await User.findOneAndUpdate(
    filter,
    { status: defaultStatus.DELETED },
    { new: true }
  );
};
exports.updateUser = async (filter, userData) => {
  return await User.findOneAndUpdate(filter, userData, { new: true });
};
