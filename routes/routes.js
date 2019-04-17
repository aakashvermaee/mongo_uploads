const { Router } = require("express");
const { storageEngine } = require("../app/storageengine");

exports.routes = router => {
  router = Router();

  // @route	GET /
  // @desc	Loads form
  router.get("/", async (req, res) => {
    res.render("index");
  });

  // @route	POST /upload
  // @desc	Uploads file to DB
  router.post("/upload", storageEngine.upload.single("file"), (req, res) => {
    res.json({
      status: 200,
      statusCode: "OK",
      file: req.file
    });
  });

  // @route	GET /files
  // @desc	Display all files in JSON
  router.get("/files", (req, res) => {
    storageEngine.getFiles(req, res);
  });

  return router;
};
