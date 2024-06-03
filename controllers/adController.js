const Advertisement = require('../models/Advertisement');
const Image = require('../models/Image');
const Seller = require('../models/Seller');
const Location = require('../models/Location');
const Category = require('../models/Category');

// Create a new advertisement
exports.createAd = async (req, res) => {
    const { topic, description, price, telephoneNo, sellerId, locationId, categoryId, images } = req.body;  // Destructure the request body
    try {
        // Create a new advertisement record
        const ad = await Advertisement.create({ topic, description, price, telephoneNo, sellerId, locationId, categoryId });
        
        // Create associated images
        for (const imageUrl of images) {
            await Image.create({ imageUrl, adId: ad.addId });
        }

        // Send a success response
        res.status(201).json({ message: 'Advertisement created successfully', ad });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error creating advertisement' });
    }
};

// Fetch all advertisements with pagination
exports.getAds = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;  // Get pagination parameters
    try {
        // Fetch advertisements with associated models
        const ads = await Advertisement.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: [Image, Seller, Location, Category]
        });

        // Send the advertisements in the response
        res.status(200).json(ads);
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error fetching advertisements' });
    }
};

// Fetch a single advertisement by ID
exports.getAd = async (req, res) => {
    const { id } = req.params;  // Get the advertisement ID from the URL parameters
    try {
        // Find the advertisement by primary key with associated models
        const ad = await Advertisement.findByPk(id, {
            include: [Image, Seller, Location, Category]
        });

        // Check if the advertisement exists
        if (!ad) return res.status(404).json({ error: 'Advertisement not found' });

        // Send the advertisement in the response
        res.status(200).json(ad);
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error fetching advertisement' });
    }
};

// Update an advertisement by ID
exports.updateAd = async (req, res) => {
    const { id } = req.params;  // Get the advertisement ID from the URL parameters
    const { topic, description, price, telephoneNo, locationId, categoryId, images } = req.body;  // Destructure the request body
    try {
        // Update the advertisement record
        await Advertisement.update({ topic, description, price, telephoneNo, locationId, categoryId }, {
            where: { addId: id }
        });

        // Delete existing images associated with the advertisement
        await Image.destroy({ where: { adId: id } });

        // Create new images
        for (const imageUrl of images) {
            await Image.create({ imageUrl, adId: id });
        }

        // Send a success response
        res.status(200).json({ message: 'Advertisement updated successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error updating advertisement' });
    }
};

// Delete an advertisement by ID
exports.deleteAd = async (req, res) => {
    const { id } = req.params;  // Get the advertisement ID from the URL parameters
    try {
        // Delete the advertisement record
        await Advertisement.destroy({ where: { addId: id } });

        // Send a success response
        res.status(200).json({ message: 'Advertisement deleted successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        // Send an error response
        res.status(500).json({ error: 'Error deleting advertisement' });
    }
};
