const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: dbConfig.pool
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sellers = require('./sellerModel')(sequelize, DataTypes);
db.advertisements = require('./adModel')(sequelize, DataTypes);
db.images = require('./imageModel')(sequelize, DataTypes);
db.locations = require('./locationModel')(sequelize, DataTypes);
db.categories = require('./categoryModel')(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Yes re-sync done!');
    });

module.exports = db;
