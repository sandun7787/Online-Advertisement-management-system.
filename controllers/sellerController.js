const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Seller = db.sellers;

const registerSeller = async (req, res) => {
    try {
        const { name, email, contact, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newSeller = await Seller.create({
            name,
            email,
            contact,
            password: hashedPassword
        });

        res.status(201).json({ message: "Seller registered successfully", newSeller });
    } catch (error) {
        console.error("Error registering seller:", error);
        res.status(500).json({ error: "An error occurred while registering seller" });
    }
};

const loginSeller = async (req, res) => {
    try {
        const { email, password } = req.body;
        const seller = await Seller.findOne({ where: { email } });

        if (!seller) {
            return res.status(404).json({ error: "Seller not found" });
        }

        const isPasswordValid = bcrypt.compareSync(password, seller.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ id: seller.sellerId, name: seller.name }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error logging in seller:", error);
        res.status(500).json({ error: "An error occurred while logging in" });
    }
};

const getProfile = async (req, res) => {
    try {
        const sellerId = req.user.id;
        const seller = await Seller.findOne({ where: { sellerId }, attributes: { exclude: ['password'] } });

        if (!seller) {
            return res.status(404).json({ error: "Seller not found" });
        }

        res.status(200).json(seller);
    } catch (error) {
        console.error("Error getting profile:", error);
        res.status(500).json({ error: "An error occurred while getting profile" });
    }
};

const updateProfile = async (req, res) => {
    try {
        const sellerId = req.user.id;
        const { name, contact, password } = req.body;

        const updatedSeller = await Seller.update(
            { name, contact, password: bcrypt.hashSync(password, 10) },
            { where: { sellerId } }
        );

        res.status(200).json({ message: "Profile updated successfully", updatedSeller });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ error: "An error occurred while updating profile" });
    }
};

module.exports = {
    registerSeller,
    loginSeller,
    getProfile,
    updateProfile
};
