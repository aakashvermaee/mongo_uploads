const config = require('./config/config');
const db = require('./db/db');
const { routes } = require('./routes/routes');
const crypto = require('crypto');
const path = require('path');

const port = config.port;

// node modules
const bodyParser = require('body-parser');
const gridFSStorage = require('multer-gridfs-storage');
const methodOverride = require('method-override');

const app = require('express')();

// middlewares
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// view engine
app.set('view engine', 'ejs');

// api middlewares
app.use(config.baseApiUri, routes(app));

// bind app
app.listen(port, (err) => {
	if (err) console.log(err);
	console.log(`App running on port: ${port}`);
});