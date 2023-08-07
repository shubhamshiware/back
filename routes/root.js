const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.send("root route");
});

router.get("/home", (req, res) => {
  res.send("home route");
});

router.get("/query", (req, res) => {
  console.log(req.query);
  res.send("query done");
});

router.post("/post/data", (req, res) => {
  //   console.log(req.params);
  console.log(req.body);
  res.json("data recieved");
});

router.post("/post/product", (req, res) => {
  let data = req.body;
  console.log(data);
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
    res.json("data saved");
  });
});
module.exports = router;
