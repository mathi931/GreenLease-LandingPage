const { test, getCategories, insertRequest } = require('./dbaccess');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use((request, response, next) => {
	console.log('middleware');
	next();
});
sql.on('error', (err) => {
	console.log(err.message);
});

// app.get('/', (req, res) => {
// 	getCategories().then((result) => res.json(result));
// });

app.get('/', (req, res) => {
	getCategories().then((result) => res.json(result.recordsets));
});

app.post('/', (req, res) => {
	let r = {...req.body}

	insertRequest(r).then((result) => res.status(201).json(result));
});

app.listen(port, () => console.log(`Listening on port:${port}`));
