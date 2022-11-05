const Router = require('express').Router();
const {registerUser} = require('../controllers/userController');
const User = require('../models/userModel');

Router.post('/register', registerUser)

module.exports = Router;



