const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Location model
const Location = sequelize.define('Location', {
    locationId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cityName: { type: DataTypes.STRING(100), allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'location',// Table name
    timestamps: false
});

module.exports = Location;
