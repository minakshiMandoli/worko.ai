const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
const { validateUser } = require("../validators/user");
router.post("/user", validateUser, UserController.createUser);
router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.viewUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
