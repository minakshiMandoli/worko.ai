const { defaultStatus } = require("../config/options");
const User = require("../models/user");

exports.create = async (userData) => {
  return await User.create(userData);
};

exports.findAll = async () => {
  return await User.find();
};

exports.findOne = async (query) => {
  return await User.findOne(query);
};
exports.findById = async (query) => {
  return await User.findById(query);
};

exports.softDelete = async (filter) => {
  return await User.findOneAndUpdate(
    filter,
    { status: defaultStatus.DELETED },
    { new: true }
  );
};
