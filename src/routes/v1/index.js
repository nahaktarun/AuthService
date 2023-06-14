const express = require("express");
const UserController = require("../../controllers/userController");
const { AuthRequestValidator } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidator.validateUserAuth,
  UserController.create
);

router.post(
  "/signin",
  AuthRequestValidator.validateUserAuth,
  UserController.signIn
);

module.exports = router;
