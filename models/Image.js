const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Import the configured Sequelize instance

// Define the Image model
const Image = sequelize.define('Image', {
    imageId: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    imageUrl: { 
        type: DataTypes.STRING(255), 
        allowNull: false 
    },
    adId: { 
        type: DataTypes.INTEGER, 
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
    tableName: 'image',  // Specify the table name
    timestamps: false  // Disable the automatic timestamps management
});

// Export the Image model
module.exports = Image;
