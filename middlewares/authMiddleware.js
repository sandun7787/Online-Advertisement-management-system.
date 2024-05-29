const jwt = require('jsonwebtoken');
const { Seller } = require('../models');

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const seller = await Seller.findByPk(decoded.id);
    if (!seller) return res.status(404).json({ error: 'Seller not found' });

    req.user = seller;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
