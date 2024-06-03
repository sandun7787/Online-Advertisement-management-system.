const Advertisement = require('../models/Advertisement');
const Image = require('../models/Image');
const Seller = require('../models/Seller');
const Location = require('../models/Location');
const Category = require('../models/Category');

exports.createAd = async (req, res) => {
    const { topic, description, price, telephoneNo, sellerId, locationId, categoryId, images } = req.body;
    try {
        const ad = await Advertisement.create({ topic, description, price, telephoneNo, sellerId, locationId, categoryId });
        
        for (const imageUrl of images) {
            await Image.create({ imageUrl, adId: ad.addId });
        }

        res.status(201).json({ message: 'Advertisement created successfully', ad });
    } catch (error) {
        res.status(500).json({ error: 'Error creating advertisement' });
    }
};

exports.getAds = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const ads = await Advertisement.findAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: [Image, Seller, Location, Category]
        });
        res.status(200).json(ads);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching advertisements' });
    }
};

exports.getAd = async (req, res) => {
    const { id } = req.params;
    try {
        const ad = await Advertisement.findByPk(id, {
            include: [Image, Seller, Location, Category]
        });
        if (!ad) return res.status(404).json({ error: 'Advertisement not found' });
        res.status(200).json(ad);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching advertisement' });
    }
};

exports.updateAd = async (req, res) => {
    const { id } = req.params;
    const { topic, description, price, telephoneNo, locationId, categoryId, images } = req.body;
    try {
        await Advertisement.update({ topic, description, price, telephoneNo, locationId, categoryId }, {
            where: { addId: id }
        });

        await Image.destroy({ where: { adId: id } });

        for (const imageUrl of images) {
            await Image.create({ imageUrl, adId: id });
        }

        res.status(200).json({ message: 'Advertisement updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating advertisement' });
    }
};

exports.deleteAd = async (req, res) => {
    const { id } = req.params;
    try {
        await Advertisement.destroy({ where: { addId: id } });
        res.status(200).json({ message: 'Advertisement deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting advertisement' });
    }
};
