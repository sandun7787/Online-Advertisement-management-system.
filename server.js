const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const sellerRoutes = require('./routes/sellerRoutes');
const advertisementRoutes = require('./routes/advertisementRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/sellers', sellerRoutes);
app.use('/api/advertisements', advertisementRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));

  sequelize.sync({ force: true })  // Warning: This will drop and recreate all tables
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));

