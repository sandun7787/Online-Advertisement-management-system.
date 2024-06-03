// Import the Express framework
const express = require('express');

// Import controller functions for retrieving and updating sellers
const { getSeller, getSellers, updateSeller } = require('../controllers/sellerController');

// Import middleware for authentication
const { authenticate } = require('../middleware/authMiddleware');

// Create a new router instance
const router = express.Router();

// Define a GET route for retrieving a specific seller by ID
router.get('/:id', getSeller);

// Define a GET route for retrieving all sellers
router.get('/', getSellers);

// Define a PUT route for updating a specific seller by ID, with authentication middleware
router.put('/:id', authenticate, updateSeller);

// Export the router for use in other parts of the application
module.exports = router;
