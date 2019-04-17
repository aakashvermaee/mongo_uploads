const { mongoose } = require("./db");
const { Schema, model } = mongoose;

const uploadsFileSchema = new Schema({
  length: Number,
  chunkSize: Number,
  uploadDate: Date,
  fileName: String,
  md5: String,
  contentType: String
});

const uploadsChunkSchema = new Schema({
  files_id: {
    type: Schema.Types.ObjectId,
    ref: "uploads.files"
  },
  data: Buffer
});

const uploadFile = model("uploads.files", uploadsFileSchema);
const uploadChunk = model("uploads.chunks", uploadsChunkSchema);

module.exports = {
  uploadFile,
  uploadChunk
};
