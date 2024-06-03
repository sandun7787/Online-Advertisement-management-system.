const Seller = require('../models/Seller');

// Fetch a single seller by ID
exports.getSeller = async (req, res) => {
    const { id } = req.params;  // Get the seller ID from the URL parameters
    try {
        // Find the seller by primary key
        const seller = await Seller.findByPk(id);
        
        // Check if the seller exists
        if (!seller) return res.status(404).json({ error: 'Seller not found' });
        
        // Send the seller in the response
        res.status(200).json(seller);
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error fetching seller' });
    }
};

// Fetch all sellers
exports.getSellers = async (req, res) => {
    try {
        // Find all sellers
        const sellers = await Seller.findAll();
        
        // Send the sellers in the response
        res.status(200).json(sellers);
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error fetching sellers' });
    }
};

// Update a seller by ID
exports.updateSeller = async (req, res) => {
    const { id } = req.params;  // Get the seller ID from the URL parameters
    const { name, email, contact } = req.body;  // Destructure the request body
    try {
        // Update the seller record
        const [updated] = await Seller.update({ name, email, contact }, {
            where: { sellerId: id }
        });

        // Check if the seller was updated
        if (!updated) return res.status(404).json({ error: 'Seller not found or no changes made' });
        
        // Send a success response
        res.status(200).json({ message: 'Seller updated successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error updating seller' });
    }
};
