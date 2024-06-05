const jwt = require('jsonwebtoken');// Import jsonwebtoken
const Seller = require('../models/Seller');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');// Get token from Authorization header
    if (!token) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const seller = await Seller.findByPk(decoded.id);
        if (!seller) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = { id: seller.sellerId };
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
