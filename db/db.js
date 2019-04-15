const config = require('../config/config');

const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

switch (config.env) {
	default:
		connectMongoDev(config.mongoUrl);
		break;
}

async function connectMongoDev(dbUrl) {
	try {
		const authData = {
			user: config.mongoUser,
			pass: config.mongoPassword,
			useNewUrlParser: true,
			useCreateIndex: true,
			dbName: config.mongoDatabase,
			keepAlive: true
		};

		const conn = mongoose.createConnection(dbUrl, authData);

		conn.once('open', () => {
			console.log('Connected to Mongo...');

			GridFS(conn);
		});
	} catch (error) {
		console.log(error);
	}
}

async function GridFS(conn) {
  const gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
}

exports.mongoose = mongoose;
