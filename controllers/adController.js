const { where, Model } = require("sequelize");
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require('sequelize');



const Advertisement = db.advertisements;
const Seller = db.sellers;
const Image = db.images;
const Category = db.categories;
const Location = db.locations;

const createAdvertisement = async (req, res) => {
    try {
        const { topic, description, price, telephoneNo, categoryId, locationId } = req.body;
        const sellerId = req.user.id;

        const newAd = await Advertisement.create({
            topic,
            description,
            price,
            telephoneNo,
            sellerId,
            categoryId,
            locationId
        });

        if (req.files && req.files.length > 0) {
            const images = req.files.map(file => ({
                imageUrl: file.path,
                adId: newAd.adId
            }));
            await Image.bulkCreate(images);
        }

        res.status(201).json({ message: "Advertisement created successfully", newAd });
    } catch (error) {
        console.error("Error creating advertisement:", error);
        res.status(500).json({ error: "An error occurred while creating the advertisement" });
    }
};


const getAdvertisementsBySeller = async (req, res) => {
    try {
        const sellerId = req.params.sellerId;

        // Check if sellerId is provided
        if (!sellerId) {
            return res.status(400).json({ error: "Seller ID is required" });
        }

        let { page, pageSize } = req.query;

        // Set default values and ensure page and pageSize are numbers
        page = page && !isNaN(page) ? parseInt(page, 10) : 1;
        pageSize = pageSize && !isNaN(pageSize) ? parseInt(pageSize, 10) : 10;

        const ads = await Advertisement.findAndCountAll({
            where: { sellerId, isDeleted: false },
            include: [
                { model: Seller, as: 'seller', attributes: ['name', 'contact'] },
                { model: Image, as: 'images', attributes: ['imageUrl'] },
                { model: Category, as: 'category', attributes: ['categoryName'] },
                { model: Location, as: 'location', attributes: ['cityName'] }
            ],
            order: [['createdAt', 'DESC']],
            offset: (page - 1) * pageSize,
            limit: pageSize
        });

        res.status(200).json({
            advertisements: ads.rows,
            totalAdvertisementsPages: ads.count,
            currentPage: page,
         
        });
    } catch (error) {
        console.error("Error getting advertisements by seller:", error);
        res.status(500).json({ error: "An error occurred while getting advertisements" });
    }
};



const getAdvertisements = async (req, res) => {
    try {
        const ads = await Advertisement.findAll({
            where: { isDeleted: false },
            include: [
                { model: Seller, as: 'seller', attributes: ['name', 'contact'] },
                { model: Image, as: 'images', attributes: ['imageUrl'] },
                { model: Category, as: 'category', attributes: ['categoryName'] },
                { model: Location, as: 'location', attributes: ['cityName'] }
            ]
        });

        res.status(200).json(ads);
    } catch (error) {
        console.error("Error getting advertisements:", error);
        res.status(500).json({ error: "An error occurred while getting advertisements" });
    }
};

const getSingleAdvertisement = async (req, res) => {
    try {
        const adId = req.params.id; // Corrected parameter

        const ad = await Advertisement.findOne({
            where: { adId, isDeleted: false },
            include: [
                { model: Seller, as: 'seller', attributes: ['name', 'contact'] },
                { model: Image, as: 'images', attributes: ['imageUrl'] },
                { model: Category, as: 'category', attributes: ['categoryName'] },
                { model: Location, as: 'location', attributes: ['cityName'] }
            ]
        });

        if (!ad) {
            return res.status(404).json({ error: "Advertisement not found" });
        }

        res.status(200).json(ad);
    } catch (error) {
        console.error("Error getting advertisement:", error);
        res.status(500).json({ error: "An error occurred while getting advertisement" });
    }
};

const updateAdvertisement = async (req, res) => {
    try {
        const adId = req.params.id; // Corrected parameter
        const { topic, description, price, telephoneNo, categoryId, locationId } = req.body;
        const sellerId = req.user.id;

        const ad = await Advertisement.findOne({ where: { adId, sellerId } });

        if (!ad) {
            return res.status(404).json({ error: "Advertisement not found or not authorized" });
        }

        await ad.update({ topic, description, price, telephoneNo, categoryId, locationId });

        if (req.files) {
            await Image.destroy({ where: { adId } });
            const images = req.files.map(file => ({
                imageUrl: file.path,
                adId: ad.adId
            }));
            await Image.bulkCreate(images);
        }

        res.status(200).json({ message: "Advertisement updated successfully", ad });
    } catch (error) {
        console.error("Error updating advertisement:", error);
        res.status(500).json({ error: "An error occurred while updating advertisement" });
    }
};

const deleteAdvertisement = async (req, res) => {
    try {
        const adId = req.params.id; // Corrected parameter
        const sellerId = req.user.id;

        const ad = await Advertisement.findOne({ where: { adId, sellerId } });

        if (!ad) {
            return res.status(404).json({ error: "Advertisement not found or not authorized" });
        }

        await ad.update({ isDeleted: true });

        res.status(200).json({ message: "Advertisement deleted successfully" });
    } catch (error) {
        console.error("Error deleting advertisement:", error);
        res.status(500).json({ error: "An error occurred while deleting advertisement" });
    }
};


const filterAdvertisements = async (req, res) => {
    try {
        let { categoryId, locationId, page, pageSize, search, topic } = req.query;

        console.log("Query Parameters:", req.query);

        // Validate and parse page and pageSize
        page = parseInt(page, 10) || 1;
        pageSize = parseInt(pageSize, 10) || 10; // Set a default pageSize if not provided

        // Validate page and pageSize
        if (page < 1 || pageSize < 1) {
            return res.status(400).json({ error: "Invalid page or pageSize" });
        }

        let queryConditions = {
            where: { isDeleted: false },
            include: [
                { model: Seller, as: 'seller', attributes: ['name', 'contact'] },
                { model: Category, as: 'category', attributes: ['categoryName'] },
                { model: Location, as: 'location', attributes: ['cityName'] }
            ],
            limit: pageSize,
            offset: (page - 1) * pageSize // Calculate offset based on page number
        };

        if (categoryId) {
            queryConditions.where.categoryId = categoryId;
        }

        if (locationId) {
            queryConditions.where.locationId = locationId;
        }

        if (search) {
            const searchQuery = search.trim(); // Trim whitespace, including newline characters
            queryConditions.where.topic = { [Op.like]: `%${searchQuery}%` }; // Use LIKE for case-insensitive search
        }

        if (topic) {
            const topicQuery = topic.trim(); // Trim whitespace, including newline characters
            queryConditions.where.topic = { [Op.like]: `%${topicQuery}%` }; // Use LIKE for case-insensitive search
        }

        // Fetch advertisements and total count
        const { rows: advertisements, count: totalAdvertisementsPages ,} = await Advertisement.findAndCountAll(queryConditions);

        // Calculate total pages
        const totalPages = Math.ceil(totalAdvertisementsPages / pageSize);

        res.status(200).json({
            advertisements,
            totalAdvertisementsPages,
            currentPage: page,
           
        });
    } catch (error) {
        console.error("Error filtering advertisements:", error);
        res.status(500).json({ error: "An error occurred while filtering advertisements" });
    }
};















module.exports = {
    createAdvertisement,
    getAdvertisementsBySeller,
    getAdvertisements,
    getSingleAdvertisement,
    updateAdvertisement,
    deleteAdvertisement,
    filterAdvertisements
};
