// const joi = require("joi");
const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
router.post("/user", UserController.createUser);
router.get("/user", UserController.getUsers);

module.exports = router;
