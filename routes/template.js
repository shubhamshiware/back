const express = require("express");
const router = express.Router();
const fs = require("fs");

const data = [
  { name: "deepanshu", occupation: "engineer" },
  { name: "shubham", occupation: "doctor" },
];

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/data", (req, res) => {
  fs.readFile("db\\db.json", "utf-8", (err, data1) => {
    if (err) {
      console.log(err);
    }
    res.render("data", {
      name: "deepanshu",
      list: data,
      json: JSON.parse(data1),
    });
    console.log(data1);
  });
});

module.exports = router;
