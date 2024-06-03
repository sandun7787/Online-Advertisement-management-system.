const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const adRoutes = require('./routes/adRoutes');
const sellerRoutes = require('./routes/sellerRoutes');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/sellers', sellerRoutes);

const PORT = process.env.PORT || 8080;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error: ' + err));
