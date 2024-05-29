const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define('seller', {
    sellerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeCreate: async (seller) => {
        const salt = await bcrypt.genSalt(10);
        seller.password = await bcrypt.hash(seller.password, salt);
      }
    }
  });

  Seller.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  return Seller;
};
