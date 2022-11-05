const mongoose = require('mongoose');
require('dotenv').config();

const connect = async (cb) => {
	try {
		await mongoose.connect(process.env.CONNECTION_STRING2, {useNewUrlParser: true, useUnifiedTopology: true})
		console.log('Connected successfully to the database')
		cb()
	} catch (err) {
		console.log(err)
		console.log('cannot connect to the database')
	}
	
}


module.exports = connect;