//Define routes: GET and POST

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const allController = require("../controllers/getAll");
const upload = require("../middleware/upload");
const app = express();
app.set("view engine", "ejs");

let routes = (app) => {
  router.get("/", homeController.getHome);
  router.get("/all", allController.findFiles);
  router.get("*", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  return app.use("/", router);

};


module.exports = routes;
