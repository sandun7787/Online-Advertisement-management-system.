// imageModel.js

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
        imageId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        adId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

  

    return Image;
};


