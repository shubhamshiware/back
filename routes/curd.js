const express = require("express");
const router = express.Router();
const path = require("path");
const {
  saveData,
  getData,
  deleteData,
  getDataById,
  editData,
  editDataHandlebar,
} = require("./../reporesitory/curd");
router.get("/", (req, res) => {
  res.render("form");
});

router.get("/viewData", (req, res) => {
  res.render("viewData", { list: getData });
  //   res.redirect("/curd");
  //   console.log("form sub", req.body);
});

router.post("/", (req, res) => {
  saveData(req.body);
  res.redirect("/curd/viewData");
  //   console.log("form sub", req.body);
});

router.post("/edit", (req, res) => {
  console.log(req.body, "edit");
  editDataHandlebar(req.body);
  res.redirect("/curd/viewData");
  //   console.log("form sub", req.body);
});

router.post("/delete", (req, res) => {
  console.log(req.body, "delete");
  deleteData(req.body.id);
  res.redirect("/curd/viewData");
  //   console.log("form sub", req.body);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let dataOfUser = getDataById(id);
  console.log(dataOfUser, "userData");
  res.render("editForm", { data: dataOfUser });
});

module.exports = router;
