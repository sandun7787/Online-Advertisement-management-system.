const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Seller = require('./Seller')(sequelize, Sequelize);
const Advertisement = require('./Advertisement')(sequelize, Sequelize);
const Category = require('./Category')(sequelize, Sequelize);
const Location = require('./Location')(sequelize, Sequelize);  // Add this line

Seller.hasMany(Advertisement, { foreignKey: 'sellerId' });
Advertisement.belongsTo(Seller, { foreignKey: 'sellerId' });

Category.hasMany(Advertisement, { foreignKey: 'categoryId' });
Advertisement.belongsTo(Category, { foreignKey: 'categoryId' });

Location.hasMany(Advertisement, { foreignKey: 'locationId' });  // Add this line
Advertisement.belongsTo(Location, { foreignKey: 'locationId' });  // Add this line

module.exports = {
  sequelize,
  Seller,
  Advertisement,
  Category,
  Location,  // Add this line
};

