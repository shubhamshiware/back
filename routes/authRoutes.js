const express = require("express");
const router = express.Router();

const { Signup, Login } = require("./../controllers/authController");
const { encryptPassword } = require("./../middlewares/auth");

router.post("/signup", encryptPassword, Signup);

router.post("/login", Login);

module.exports = router;
