const mongoose = require('mongoose');


const goalSchema = mongoose.Schema({
	description: {type: String, required: [true, 'You must enter a goal']},
	user: {type: String}
})


module.exports = mongoose.model('Goal', goalSchema);