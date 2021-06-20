const sql = require('mssql');
const dbConfig = require('./dbconfig');

const test = async () => {
	try {
		let pool = await sql.connect(dbConfig);
		console.dir('sql server connected...');
		sql.close();
	} catch (error) {
		console.log(' error :' + error);
		sql.close();
	}
};

const getCategories = async () => {
	try {
		let pool = await sql.connect(dbConfig);
		return await pool.request().query('SELECT * FROM Category');

	} catch (error) {
		console.log(error.message);
		sql.close();
	}
};

const insertRequest = async (r) => {
	try {
		let pool = await sql.connect(dbConfig);
		let insertR = await pool
			.request()
			.input('company', sql.VarChar, r.company)
			.input('totalCount', sql.Int, r.totalCoubt)
			.input('statusID', sql.Int, r.statusID)
			.query('INSERT');
		//return insertR.recordsets;
	} catch (error) {
		console.log(error);
		sql.close;
	}
};

module.exports = {
	test: test,
	getCategories: getCategories,
	insertRequest: insertRequest,
};
