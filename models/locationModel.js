module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define("location", {
        locationId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cityName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Location.associate = models => {
        Location.hasMany(models.advertisements, { foreignKey: 'locationId', as: 'advertisements' });
    };

    return Location;
};
