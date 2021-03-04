const db = require("../models");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

const Image = db.images;

const findFiles = async (req, res) => {
  const images = await Image.findAll({
    attributes: ["id", "name", "address", "city", "cap"],
  });
  const json = JSON.stringify(images, null, 2);
  res.render("../src/views/all.ejs", {
    images: images,
  });
};

module.exports = {
  findFiles,
};
