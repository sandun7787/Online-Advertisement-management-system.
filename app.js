// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database'); // Assuming this file configures your database connection
const authRoutes = require('./routes/authRoutes'); // Routes for authentication
const adRoutes = require('./routes/adRoutes'); // Routes for ads
const sellerRoutes = require('./routes/sellerRoutes'); // Routes for sellers

// Load environment variables from a .env file into process.env
dotenv.config();

// Create an Express app
const app = express();

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Mount the authentication routes on '/api/auth'
app.use('/api/auth', authRoutes);

// Mount the ad routes on '/api/ads'
app.use('/api/ads', adRoutes);

// Mount the seller routes on '/api/sellers'
app.use('/api/sellers', sellerRoutes);

// Define the port for the server to listen on
const PORT = process.env.PORT || 8080;

// Sync the Sequelize models with the database and start the server
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error: ' + err));
