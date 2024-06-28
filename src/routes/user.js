const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
const { validateUser } = require("../validators/user");
router.post("", validateUser, UserController.createUser);
router.get("", UserController.getUsers);
router.get("/:id", UserController.viewUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", validateUser, UserController.updateUser);
router.patch("/:id", validateUser, UserController.updateUser);

module.exports = router;
