const Router = require('express').Router()

const {createGoal, getAllGoal, getOneGoal, updateGoal, deleteGoal} = require('../controllers/goalsController');

Router.route('/').get(getAllGoal).post(createGoal);

Router.route('/:id').get(getOneGoal).put(updateGoal).delete(deleteGoal);

module.exports = Router