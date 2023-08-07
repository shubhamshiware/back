const { saveData, getDataByUserName } = require("../reporesitory/mongoDb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const Signup = (req, res) => {
  saveData(req.body)
    .then((result) => {
      res.json({
        message: "Success",
        data: result,
        error: null,
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed",
        data: null,
        error: err.toString(),
      });
    });
};

const Login = (req, res) => {
  getDataByUserName(req.body.username)
    .then((result) => {
      if (result) {
        bcrypt.compare(
          req.body.password,
          result.password,
          function (err, data) {
            if (!data) {
              res.json({
                message: "Password Wrong",
                data: null,
                error: "invalid password",
              });
            } else {
              const token = jwt.sign(
                { username: result.username },
                "mysecretkey"
              );
              res.json({
                message: "Sucess",
                data: token,
                error: "null",
              });
            }

            // result == true
          }
        );
      } else {
        res.json({
          message: "Failed",
          data: null,
          error: "Username not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Failed",
        data: null,
        error: err.toString(),
      });
    });
};

module.exports = { Signup, Login };
