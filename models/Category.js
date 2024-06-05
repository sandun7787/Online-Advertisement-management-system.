const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Category model
const Category = sequelize.define('Category', {
    categoryId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    categoryName: { type: DataTypes.STRING(100), allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'category',// Table name
    timestamps: false
});

module.exports = Category;
