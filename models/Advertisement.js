const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Image = require('./Image');

// Define the Advertisement model
const Advertisement = sequelize.define('Advertisement', {
    addId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    topic: { type: DataTypes.STRING(100), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    telephoneNo: { type: DataTypes.STRING(45), allowNull: false },
    sellerId: { type: DataTypes.INTEGER, allowNull: false },
    locationId: { type: DataTypes.INTEGER, allowNull: false },
    categoryId: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'advertisement',// Table name
    timestamps: false
});

// Define associations
Advertisement.hasMany(Image, { foreignKey: 'adId' });
Image.belongsTo(Advertisement, { foreignKey: 'adId' });

module.exports = Advertisement;
