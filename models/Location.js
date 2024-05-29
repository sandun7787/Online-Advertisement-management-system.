module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
      locationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Location;
  };
  