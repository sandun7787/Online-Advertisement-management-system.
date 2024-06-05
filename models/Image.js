const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Image model
const Image = sequelize.define('Image', {
    imageId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    imageUrl: { type: DataTypes.STRING(255), allowNull: false },
    adId: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'image',// Table name
    timestamps: false
});

module.exports = Image;
