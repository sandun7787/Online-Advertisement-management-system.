const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Seller = require('../models/Seller');

// Register a new seller
exports.register = async (req, res) => {
    const { name, email, password, contact } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newSeller = await Seller.create({ name, email, password: hashedPassword, contact });
        res.status(201).json({ message: 'Seller registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering seller' });
    }
};
// Login a seller
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const seller = await Seller.findOne({ where: { email } });
        if (!seller || !(await bcrypt.compare(password, seller.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: seller.sellerId }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};
