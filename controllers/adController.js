const Advertisement = require('../models/Advertisement');
const Image = require('../models/Image');

exports.createAd = async (req, res) => {
    const { topic, description, price, telephoneNo, sellerId, locationId, categoryId, images } = req.body;
    try {
        const ad = await Advertisement.create({ topic, description, price, telephoneNo, sellerId, locationId, categoryId });
        if (images && images.length > 0) {
            const imagePromises = images.map(imageUrl => Image.create({ imageUrl, adId: ad.adId }));
            await Promise.all(imagePromises);
        }
        res.status(201).json({ message: 'Advertisement created successfully', ad });
    } catch (error) {
        res.status(500).json({ error: 'Error creating advertisement' });
    }
};

exports.getAllAds = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const ads = await Advertisement.findAndCountAll({
            offset: (page - 1) * limit,
            limit: parseInt(limit),
            include: [{ model: Image }]
        });
        res.status(200).json({
            totalItems: ads.count,
            totalPages: Math.ceil(ads.count / limit),
            currentPage: page,
            ads: ads.rows
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching advertisements' });
    }
};

exports.getOneAd = async (req, res) => {
    const { id } = req.params;
    try {
        const ad = await Advertisement.findByPk(id, { include: [{ model: Image }] });
        if (!ad) {
            return res.status(404).json({ error: 'Advertisement not found' });
        }
        res.status(200).json(ad);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching advertisement' });
    }
};

exports.updateAd = async (req, res) => {
    const { id } = req.params;
    const { topic, description, price, telephoneNo, locationId, categoryId, images } = req.body;
    try {
        const ad = await Advertisement.findByPk(id);
        if (!ad) {
            return res.status(404).json({ error: 'Advertisement not found' });
        }
        await ad.update({ topic, description, price, telephoneNo, locationId, categoryId });
        if (images && images.length > 0) {
            await Image.destroy({ where: { adId: ad.adId } });
            const imagePromises = images.map(imageUrl => Image.create({ imageUrl, adId: ad.adId }));
            await Promise.all(imagePromises);
        }
        res.status(200).json({ message: 'Advertisement updated successfully', ad });
    } catch (error) {
        res.status(500).json({ error: 'Error updating advertisement' });
    }
};

exports.deleteAd = async (req, res) => {
    const { id } = req.params;
    try {
        const ad = await Advertisement.findByPk(id);
        if (!ad) {
            return res.status(404).json({ error: 'Advertisement not found' });
        }
        await ad.destroy();
        res.status(200).json({ message: 'Advertisement deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting advertisement' });
    }
};
