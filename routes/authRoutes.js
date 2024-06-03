// Import the Express framework
const express = require('express');

// Import the register and login functions from the authController
const { register, login } = require('../controllers/authController');

// Create a new router instance
const router = express.Router();

// Define a POST route for user registration
router.post('/register', register);

// Define a POST route for user login
router.post('/login', login);

// Export the router for use in other parts of the application
module.exports = router;
