const cloudinary = require("cloudinary");
const { editData } = require("./..//reporesitory/mongoDb");

cloudinary.config({
  cloud_name: "ddfv2cmu5",
  api_key: "247635989244889",
  api_secret: "nxTh-LbJhjt6cxXQWwihqsA5VIo",
  secure: true,
});

const FileUpload = (req, res) => {
  let uploadFileName = req.files["File\n"].path.split("\\");
  let fullUrl = req.protocol + "://" + req.get("host");
  console.log(uploadFileName);
  res.json({
    message: "Sucess",
    data: `${fullUrl}/${uploadFileName[uploadFileName.length - 1]}`,
  });
};

const FileUploadCloudinary = async (req, res) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
console.log(req.files)
  //   let uploadFileName = req.files["File\n"].path.split("\\");
  const result = await cloudinary.uploader.upload(
    // req.files["File\n"].path,
    req.files.file.path,
    options
  );
  res.json({
    message: "image data added to database",
    data: result.url,
  });

  // const id1 = req.body.id;
  // const imageUrl = result.url;
  // let data = {
  //   id: id1,
  //   image: imageUrl,
  // };
  // console.log(data);
  // if (id1) {
  //   let data1 = await editData(data);
  //   res.json({
  //     message: "image data added to database",
  //     data: data1,
  //   });
  // } else {
  //   res.json({
  //     message: "failed",
  //     error: "Enter valid id to upload image data to database",
  //   });
  // }
};

// const FileUploadCloudinary = async (req, res) => {
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };

//     const result = await cloudinary.uploader.upload(
//     req.files["File\n"].path,
//     options
//   );

//   const id1 = req.body.id;
//   const imageUrl = result.url;
//   const data = {
//     id: id1,
//     image: imageUrl,
//   };

//   if (id1) {

//     let data1 = await editData(data);

//     res.json({
//       message: "image data added to the database",
//       data: data1,
//     });
//   } else {

//     res.status(400).json({
//       message: "Failed",
//       error: "Enter a valid id to upload image data to the database",
//     });
//   }

// };

// module.exports = {
//   FileUploadCloudinary,
// };

module.exports = {
  FileUpload,
  FileUploadCloudinary,
};
