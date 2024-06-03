const Seller = require('../models/Seller');
const bcrypt = require('bcryptjs');

// Create a new seller
exports.createSeller = async (req, res) => {
    const { name, email, password, contact } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newSeller = await Seller.create({ name, email, password: hashedPassword, contact });
        res.status(201).json(newSeller);
    } catch (error) {
        res.status(500).json({ error: 'Error creating seller' });
    }
};

// Get all sellers
exports.getSellers = async (req, res) => {
    try {
        const sellers = await Seller.findAll({ attributes: ['sellerId', 'name', 'email', 'contact'] });
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sellers' });
    }
};

// Get a single seller by ID
exports.getSellerById = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await Seller.findByPk(id, { attributes: ['sellerId', 'name', 'email', 'contact'] });
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching seller' });
    }
};

// Update a seller by ID
exports.updateSeller = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, contact } = req.body;
    try {
        const seller = await Seller.findByPk(id);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        const hashedPassword = password ? await bcrypt.hash(password, 10) : seller.password;

        seller.name = name || seller.name;
        seller.email = email || seller.email;
        seller.password = hashedPassword;
        seller.contact = contact || seller.contact;

        await seller.save();
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({ error: 'Error updating seller' });
    }
};

// Delete a seller by ID
exports.deleteSeller = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await Seller.findByPk(id);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }

        await seller.destroy();
        res.status(200).json({ message: 'Seller deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting seller' });
    }
};
