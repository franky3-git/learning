const Goal = require('../models/goalsModel');
const asyncWrapper = require('../middlewares/asyncWrapper');
const {createCustomError} = require('../middlewares/customError');


const createGoal = asyncWrapper(async (req, res) => {
	const {description} = req.body;
	
	const goal = new Goal({description})
	
	const g = await goal.save();
	res.status(201).json({status: 'success', data: 'goal added'})
})

const getAllGoal = asyncWrapper(async (req, res, next) => {
	
		const goals = await Goal.find({}).select();
		res.status(200).json({status: 'success', data: goals})	
})

const getOneGoal = asyncWrapper(async (req, res, next) => {
	const {id} = req.params;
	
	const goal = await Goal.findById(id).select();
	if(!goal){
		next(createCustomError('Goal Not Found', 404))
	}
	res.status(200).json({status: 'success', data: goal})
})

const updateGoal = asyncWrapper(async (req, res) => {
	const {id} = req.params;

	let goal = await Goal.findById(id).select();
	if(!goal){
		next(createCustomError('Goal Not Found cannot update something that does not exist', 404))
	}
	 goal = await Goal.findByIdAndUpdate(id, {$set : {description: req.body.description }}, {new: true, upsert: true, setDefaultsOnInsert: true});

	res.status(200).json({status: 'success', data: goal})
		
})

const deleteGoal = asyncWrapper(async (req, res) => {
	const {id} = req.params;
	
	let goal = await Goal.findById(id).select();
	if(!goal){
		next(createCustomError('Goal Not Found cannot delete something that does not exist', 404))
	}
	goal = await Goal.findByIdAndDelete(id);
	res.status(200).json({status: 'success', data: 'goal deleted'})
})

module.exports = {createGoal, getAllGoal, getOneGoal, updateGoal, deleteGoal}