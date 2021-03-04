const fs = require("fs");
const path = require("path");
const db = require("../models");
const Image = db.images;

//get and check file upload from req.file
const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    };

    //use create() method to save an Image object to MySQL database.
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      address: req.body.address,
      city: req.body.city,
      cap: req.body.cap,
    }).then((image) => {

      //If the process is successful, we return to index.html.
      return res.sendFile(path.join(`${__dirname}/../views/index.html`));
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
