const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const adRoutes = require('./routes/adRoutes');
const authRoutes = require('./routes/authRoutes');
const sellerRoutes = require('./routes/sellerRoutes');

app.use('/api', adRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', sellerRoutes);

sequelize.sync();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
