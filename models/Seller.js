const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Seller model
const Seller = sequelize.define('Seller', {
    sellerId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    contact: { type: DataTypes.STRING(45), allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'seller',// Table name
    timestamps: false
});

module.exports = Seller;
