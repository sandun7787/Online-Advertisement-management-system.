const Seller = require('../models/Seller');

exports.updateSeller = async (req, res) => {
    const { id } = req.params;
    const { name, email, contact } = req.body;
    try {
        const seller = await Seller.findByPk(id);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        await seller.update({ name, email, contact });
        res.status(200).json({ message: 'Seller profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating seller profile' });
    }
};

exports.getSeller = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await Seller.findByPk(id);
        if (!seller) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching seller profile' });
    }
};

exports.getAllSellers = async (req, res) => {
    try {
        const sellers = await Seller.findAll();
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sellers' });
    }
};
