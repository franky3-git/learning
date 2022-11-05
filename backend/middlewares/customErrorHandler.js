const { CustomError} = require('./customError');

const errorHandler = (err, req, res, next) => {
	if(err.isInstanceOf(CustomError)) {
		return res.status(err.statusCode).json({msg: err.msg})
	}
	return res.status(500).json({msg: 'Internal server error'})
}

module.exports = errorHandler;