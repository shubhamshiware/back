const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("root routerrr");
});

router.get("/data", (req, res) => {
  res.send("product data");
});

module.exports = router;
