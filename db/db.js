const config = require("../config/config");

const mongoose = require("mongoose");
const GridFS = require("gridfs-stream");

switch (config.env) {
  default:
    connectMongoDev(config.mongoUrl);
    break;
}

async function connectMongoDev(dbUrl) {
  try {
    const connOptions = {
      user: config.mongoUser,
      pass: config.mongoPassword,
      useNewUrlParser: true,
      useCreateIndex: true,
      dbName: config.mongoDatabase,
      keepAlive: true
    };

    const conn = mongoose.createConnection(dbUrl, connOptions);

    conn.once("open", () => {
      // init stream
      console.log("Connected to Mongo...");
      initGridFS(conn);
    });
  } catch (error) {
    console.log(error);
  }
}

async function initGridFS(conn) {
  const gfs = GridFS(conn.db, mongoose.mongo);
  gfs.collection("uploads");
}

exports.mongoose = mongoose;
