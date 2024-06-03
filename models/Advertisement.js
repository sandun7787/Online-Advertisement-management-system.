const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Import the Sequelize instance
const Image = require('./Image');  // Import the Image model

// Define the Advertisement model
const Advertisement = sequelize.define('Advertisement', {
    addId: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    topic: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    description: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    price: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    },
    telephoneNo: { 
        type: DataTypes.STRING(45), 
        allowNull: false 
    },
    sellerId: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    locationId: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    categoryId: { 
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
    tableName: 'advertisement',  // Specify the table name
    timestamps: false  // Disable the automatic timestamps management
});

// Define relationships
Advertisement.hasMany(Image, { foreignKey: 'adId' });  // An Advertisement can have many Images
Image.belongsTo(Advertisement, { foreignKey: 'adId' });  // An Image belongs to an Advertisement

// Export the Advertisement model
module.exports = Advertisement;
