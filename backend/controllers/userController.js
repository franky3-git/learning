const User = require('../models/userModel');

module.exports.registerUser = async (req, res) => {
	const {email, password, username} = req.body;
	try {
		const user = new User({email, password, username});
		await user.save();
		res.send({user: user._id})
	} catch(err) {
		console.log(err)
	}
	
}

