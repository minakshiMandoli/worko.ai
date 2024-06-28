const UserService = require("../services/user");
const {
  errorMessage,
  successMessage,
  defaultStatus,
} = require("../config/options");

exports.createUser = async (req, res) => {
  try {
    const duplicateUserExist = await UserService.checkDuplicate(req.body);
    if (duplicateUserExist) {
      return res
        .status(400)
        .send({ status: false, message: errorMessage.ALREADY_EXIST("Email") });
    }
    const user = await UserService.createUser(req.body);
    return res.status(201).send({
      status: true,
      message: successMessage.ADD_SUCCESS_MESSAGE("User"),
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers({
      status: { $ne: defaultStatus.DELETED },
    });
    return res.status(200).send({
      status: true,
      message: successMessage.FETCHED_SUCCESS_MESSAGE("Users"),
      data: users,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
exports.viewUser = async (req, res) => {
  try {
    const user = await UserService.getOneUser({
      _id: req.params.id,
      status: { $ne: defaultStatus.DELETED },
    });
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: errorMessage.DOES_NOT_EXIST("User") });
    }
    return res.status(200).send({
      status: true,
      message: successMessage.FETCHED_SUCCESS_MESSAGE("User"),
      data: user,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: errorMessage.DOES_NOT_EXIST("User") });
    }

    return res.status(200).send({
      status: true,
      message: successMessage.DELETE_SUCCESS_MESSAGE("User"),
    });
  } catch (error) {
    console.log("err", error);
    return res
      .status(500)
      .send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const duplicateUserExist = await UserService.checkDuplicate(
      req.body,
      req.params.id
    );
    if (duplicateUserExist) {
      return res
        .status(400)
        .send({ status: false, message: errorMessage.ALREADY_EXIST("Email") });
    }
    const user = await UserService.updateUser(req.params.id, req.body);
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: errorMessage.DOES_NOT_EXIST("User") });
    }

    return res.status(200).send({
      status: true,
      message: successMessage.UPDATE_SUCCESS_MESSAGE("User"),
      data: user,
    });
  } catch (error) {
    console.log("err", error);
    return res
      .status(500)
      .send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
exports.patchUpdateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, {status:req.body.status});
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: errorMessage.DOES_NOT_EXIST("User") });
    }

    return res.status(200).send({
      status: true,
      message: successMessage.UPDATE_SUCCESS_MESSAGE("User"),
      data: user,
    });
  } catch (error) {
    console.log("err", error);
    return res
      .status(500)
      .send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};
