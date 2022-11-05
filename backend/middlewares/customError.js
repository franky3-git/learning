module.exports.CustomError =  class  extends Error {
	constructor(msg, statusCode) {
		super(msg)
		this.statusCode = statusCode
	}
}

module.exports.createCustomError = (msg, status) => {
	return new CustomError(msg, status)
}

