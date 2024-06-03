const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Import the configured Sequelize instance

// Define the Category model
const Category = sequelize.define('Category', {
    categoryId: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    categoryName: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    createdAt: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    },
    updatedAt: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    }
}, {
    tableName: 'category',  // Specify the table name
    timestamps: false  // Disable the automatic timestamps management
});

// Export the Category model
module.exports = Category;
