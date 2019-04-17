const crypto = require("crypto");
const path = require("path");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");

const config = require("../../config/config");

const { uploadFile } = require("../../db/file");

const gridConfiguration = {
  url: config.mongoUrl,
  options: {
    useNewUrlParser: true
  },
  file: (req, file) => fileInfo(req, file)
};

function fileInfo(req, file) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        return reject(err);
      }
      const fileName = buf.toString("hex") + path.extname(file.originalname);
      const fileInfo = {
        fileName,
        bucketName: "uploads"
      };
      resolve(fileInfo);
    });
  });
}

const storage = new GridFsStorage(gridConfiguration);

const upload = multer({
  storage
});

const getFiles = async (req, res) => {
  uploadFile.find({}, (err, response) => {
    // check if files exists
    if (!files || files.length === 0) {
      res.status(404).json({
        status: 404,
        statusCode: "Not Found",
        err: "No files exist"
      });
    }

    // Files exists
    res.json({
      status: 200,
      statusCode: "OK",
      total: files.length,
      files
    });
  });
};

module.exports = { upload, getFiles };
