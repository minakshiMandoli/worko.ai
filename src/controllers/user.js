const UserService = require("../services/user");

exports.createUser = async (req, res) => {
  try {
    const duplicateUserExist = await UserService.getOneUser({
      email: req.body.email,
    });
    if (duplicateUserExist) {
      res.status(400).send({ status: false, message: "Email already exist" });
    }
    const user = await UserService.createUser(req.body);
    res
      .status(201)
      .send({ status: true, message: "User added successfully", data: user });
  } catch (error) {
    res.status(500).send({ status: false, message: "Internal server error" });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).send({
      status: true,
      message: "Users fetched successfully ",
      data: users,
    });
  } catch (error) {
    res.status(500).send({ status: false, message: "Internal server error" });
  }
};
