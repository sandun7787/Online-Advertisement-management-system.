const Seller = require('../models/Seller');

exports.getSeller = async (req, res) => {
    const { id } = req.params;
    try {
        const seller = await Seller.findByPk(id);
        if (!seller) return res.status(404).json({ error: 'Seller not found' });
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching seller' });
    }
};

exports.getSellers = async (req, res) => {
    try {
        const sellers = await Seller.findAll();
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sellers' });
    }
};

exports.updateSeller = async (req, res) => {
    const { id } = req.params;
    const { name, email, contact } = req.body;
    try {
        await Seller.update({ name, email, contact }, {
            where: { sellerId: id }
        });
        res.status(200).json({ message: 'Seller updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating seller' });
    }
};
