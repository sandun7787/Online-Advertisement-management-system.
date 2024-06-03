// Import the Express framework
const express = require('express');

// Import controller functions for CRUD operations on ads
const { createAd, getAds, getAd, updateAd, deleteAd } = require('../controllers/adController');

// Import middleware for authentication
const { authenticate } = require('../middleware/authMiddleware');

// Create a new router instance
const router = express.Router();

// Define a POST route for creating a new ad, with authentication middleware
router.post('/', authenticate, createAd);

// Define a GET route for retrieving all ads
router.get('/', getAds);

// Define a GET route for retrieving a specific ad by its ID
router.get('/:id', getAd);

// Define a PUT route for updating a specific ad by its ID, with authentication middleware
router.put('/:id', authenticate, updateAd);

// Define a DELETE route for deleting a specific ad by its ID, with authentication middleware
router.delete('/:id', authenticate, deleteAd);

// Export the router for use in other parts of the application
module.exports = router;
