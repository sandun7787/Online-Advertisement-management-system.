const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Seller = require('../models/Seller');

// Register a new seller
exports.register = async (req, res) => {
    const { name, email, password, contact } = req.body;  // Destructure the request body
    try {
        // Hash the password with a salt of 10 rounds
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new seller record in the database
        const newSeller = await Seller.create({ name, email, password: hashedPassword, contact });
        
        // Send a success response
        res.status(201).json({ message: 'Seller registered successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error registering seller' });
    }
};

// Login a seller
exports.login = async (req, res) => {
    const { email, password } = req.body;  // Destructure the request body
    try {
        // Find the seller by email
        const seller = await Seller.findOne({ where: { email } });
        
        // Check if the seller exists and if the password is correct
        if (!seller || !(await bcrypt.compare(password, seller.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        // Generate a JWT token
        const token = jwt.sign({ id: seller.sellerId }, process.env.SECRET_KEY, { expiresIn: '1h' });
        
        // Send the token in the response
        res.status(200).json({ token });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error logging in' });
    }
};
