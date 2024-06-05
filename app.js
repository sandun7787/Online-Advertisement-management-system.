const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();// Load environment variables from .env file

const app = express();// Create an instance of Express

app.use(bodyParser.json());
// Import routes
const adRoutes = require('./routes/adRoutes');
const authRoutes = require('./routes/authRoutes');
const sellerRoutes = require('./routes/sellerRoutes');

app.use('/api', adRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', sellerRoutes);

sequelize.sync();// Sync database models and start the server

const PORT = process.env.PORT || 8080; // Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
