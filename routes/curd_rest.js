const express = require("express");
const router = express.Router();
const path = require("path");
const {
  RoutesLevelLog,
  RouteLevelLog,
  LogRouteUrl,
} = require("./../middlewares/middleware");
// const {
//   saveData,
//   getData,
//   deleteData,
//   getDataById,
//   editData,
// } = require("../reporesitory/curd");
const { verifytoken } = require("./../middlewares/auth");
const {
  saveData,
  getData,
  deleteData,
  getDataById,
  editData,
} = require("../reporesitory/mongoDb");

router.use(verifytoken);
router.get("/", RouteLevelLog, async (req, res) => {
  const data1 = await getData();
  res.json({ data: data1 });
});

router.post("/", async (req, res) => {
  let data1 = await saveData(req.body);
  res.json({
    message: "sucess",
    data: data1,
  });
});

router.post("/many", async (req, res) => {
  req.body.map(async (ele, index) => {
    let data1 = await saveData(ele);
  });

  res.json({
    message: "sucess",
  });
});

router.put("/:id", async (req, res) => {
  req.body.id = req.params.id;

  let editData1 = await editData(req.body);
  res.json({
    message: "sucess",
    data: editData1,
  });
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let deleteData1 = await deleteData(id);
  res.json({
    message: "sucess",
    data: deleteData1,
  });
});

module.exports = router;
