// Load environment variables from .env file
require('dotenv').config();

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

// Authenticate the connection to the database
sequelize.authenticate()
    .then(() => console.log('Database connected...'))  // Log success message
    .catch(err => console.log('Error: ' + err));       // Log error message

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
