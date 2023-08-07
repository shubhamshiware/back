const express = require("express");
const router = express.Router();
const multipart = require("connect-multiparty");
const path = require("path");
const {
  FileUpload,
  FileUploadCloudinary,
} = require("./../controllers/fileController");

const multipartMiddleware = multipart({
  uploadDir: path.join(__dirname, "../uploads"),
});

// const { encryptPassword } = require("./../middlewares/auth");

router.post("/local", multipartMiddleware, FileUpload);
router.post("/cloudinary", multipartMiddleware, FileUploadCloudinary);

module.exports = router;
