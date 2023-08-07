const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const encryptPassword = (req, res, next) => {
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
      res.send("Error Password");
      return;
    }
    req.body.password = hash;
    next();
    // Store hash in your password DB.
  });
};

const verifytoken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, "mysecretkey", function (err, decoded) {
      if (err) {
        res.status(401).json({
          message: "failed",
          data: null,
          error: "please provide proper token",
        });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "failed",
      data: null,
      error: "please provide proper token",
    });
  }
};

module.exports = { encryptPassword, verifytoken };
