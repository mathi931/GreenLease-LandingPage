'use strict';

class Request {
	constructor(company, totalCount, statusID) {
		this.company = company;
		this.totalCount = totalCount;
		statusID ? (this.statusID = statusID) : (statusID = 4);
	}
}

module.exports = Request;
