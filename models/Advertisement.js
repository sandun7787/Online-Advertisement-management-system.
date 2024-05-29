module.exports = (sequelize, DataTypes) => {
  const Advertisement = sequelize.define('advertisement', {
    adId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    telephoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationId: {  // Add this line
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Advertisement;
};
