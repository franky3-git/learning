const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	username: {
		type: String, 
		minLength: 4,
		maxLength: 80,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: [true, 'enter a valid email'],
		trim: true,
		lowercase: true,
		match: [isEmail],
		unique: true
	}, 
	password: {
		type: String, 
		minLength: 4,
		maxLength: 80,
		required: true,
		trim: true
	},
	bio: {
		type: String
	}, 
	followers: [String],
	following: [String],
	likes: [String],
	picture: {
		type: String,
		
	}
}, {
	timestamp: true
})

userSchema.pre('save', async function(next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next()
})


module.exports = mongoose.model('User', userSchema)















