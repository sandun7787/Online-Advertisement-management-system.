const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Import the configured Sequelize instance

// Define the Location model
const Location = sequelize.define('Location', {
    locationId: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    cityName: { 
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
    tableName: 'location',  // Specify the table name
    timestamps: false  // Disable the automatic timestamps management
});

// Export the Location model
module.exports = Location;
