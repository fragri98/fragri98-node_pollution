//middleware for uploading & storing image

//import multer module
const multer = require("multer");
const imageFilter = (req, file, cb) => {
  // check file type
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  //folder to store the uploaded files.
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  //name of the file inside the destination folder.
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
