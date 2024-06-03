// Import the jsonwebtoken package
const jwt = require('jsonwebtoken');

// Define the authentication middleware function
exports.authenticate = (req, res, next) => {
    // Retrieve the token from the Authorization header
    const token = req.header('Authorization');
    
    // Check if a token exists
    if (!token) {
        // If no token is provided, return a 401 Unauthorized error
        return res.status(401).json({ error: 'Access denied' });
    }

    try {
        // Verify the token using the secret key stored in the environment variables
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        
        // If the token is valid, attach the decoded payload (seller information) to the request object
        req.seller = decoded;
        
        // Call the next middleware function
        next();
    } catch (error) {
        // If an error occurs during token verification, return a 400 Bad Request error
        res.status(400).json({ error: 'Invalid token' });
    }
};
