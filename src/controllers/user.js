const UserService = require("../services/user");
const { errorMessage, successMessage } = require("../config/options");

exports.createUser = async (req, res) => {
  try {
    const duplicateUserExist = await UserService.getOneUser({
      email: req.body.email,
    });
    if (duplicateUserExist) {
      res
        .status(400)
        .send({ status: false, message: errorMessage.ALREADY_EXIST("Email") });
    }
    const user = await UserService.createUser(req.body);
    res.status(201).send({
      status: true,
      message: successMessage.ADD_SUCCESS_MESSAGE("User"),
      data: user,
    });
  } catch (error) {
    res.status(500).send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).send({
      status: true,
      message: successMessage.FETCHED_SUCCESS_MESSAGE("Users"),
      data: users,
    });
  } catch (error) {
    res.status(500).send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
