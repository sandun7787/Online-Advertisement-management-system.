// Import necessary modules
const Advertisement = require('../models/Advertisement');
const Image = require('../models/Image');
const { Op } = require('sequelize');

// Create Advertisement
exports.createAd = async (req, res) => {
    const { topic, description, price, telephoneNo, sellerId, locationId, categoryId, images } = req.body;

    try {
        // Check if all required fields are present in the request body
        if (!topic || !description || !price || !telephoneNo || !sellerId || !locationId || !categoryId || !images || images.length === 0) {
            return res.status(400).json({ error: 'All fields are required for creating an advertisement, including at least one image' });
        }

        // Create the advertisement
        const ad = await Advertisement.create({ topic, description, price, telephoneNo, sellerId, locationId, categoryId });

        // Create associated images
        for (const imageUrl of images) {
            await Image.create({ imageUrl, adId: ad.addId });
        }

        // Send success response
        res.status(201).json({ message: 'Advertisement created successfully', ad });
    } catch (error) {
        // Log the error for debugging
        console.error('Error creating advertisement:', error);
        // Send error response
        res.status(500).json({ error: 'Error creating advertisement' });
    }
};

// Update Advertisement by ID
exports.updateAd = async (req, res) => {
    const { id } = req.params;
    const { topic, description, price, telephoneNo, locationId, categoryId, images } = req.body;
    try {
        // Check if all required fields are present in the request body
        if (!topic || !description || !price || !telephoneNo || !locationId || !categoryId || !images || images.length === 0) {
            return res.status(400).json({ error: 'All fields are required for updating an advertisement, including at least one image' });
        }

        // Update the advertisement
        await Advertisement.update({ topic, description, price, telephoneNo, locationId, categoryId }, {
            where: { addId: id }
        });

        // Update associated images
        await Image.destroy({ where: { adId: id } });
        for (const imageUrl of images) {
            await Image.create({ imageUrl, adId: id });
        }

        res.status(200).json({ message: 'Advertisement updated successfully' });
    } catch (error) {
        console.error('Error updating advertisement:', error);
        res.status(500).json({ error: 'Error updating advertisement' });
    }
};

// Get all Advertisements with pagination
exports.getAds = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const ads = await Advertisement.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: [Image]
        });
        res.status(200).json(ads);
    } catch (error) {
        console.error('Error fetching advertisements:', error);
        res.status(500).json({ error: 'Error fetching advertisements' });
    }
};

// Get Advertisement by ID
exports.getAd = async (req, res) => {
    const { id } = req.params;
    try {
        const ad = await Advertisement.findByPk(id, {
            include: [Image]
        });
        if (!ad) {
            return res.status(404).json({ error: 'Advertisement not found' });
        }
        res.status(200).json(ad);
    } catch (error) {
        console.error('Error fetching advertisement:', error);
        res.status(500).json({ error: 'Error fetching advertisement' });
    }
};

// Delete Advertisement by ID
exports.deleteAd = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAd = await Advertisement.destroy({ where: { addId: id } });
        if (!deletedAd) {
            return res.status(404).json({ error: 'Advertisement not found' });
        }
        res.status(200).json({ message: 'Advertisement deleted successfully' });
    } catch (error) {
        console.error('Error deleting advertisement:', error);
        res.status(500).json({ error: 'Error deleting advertisement' });
    }
};
