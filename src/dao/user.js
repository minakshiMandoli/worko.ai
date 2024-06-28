const User = require("../models/user");

exports.create = async (userData) => {
  return await User.create(userData);
};

exports.findAll = async () => {
  return await User.find({ isDeleted: false });
};

exports.findOne = async (query) => {
  return await User.findOne(query);
};
