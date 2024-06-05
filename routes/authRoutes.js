const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);// Register route
router.post('/login', authController.login);// Login route

module.exports = router;
