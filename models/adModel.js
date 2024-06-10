module.exports = (sequelize, DataTypes) => {
    const Advertisement = sequelize.define("advertisement", {
        adId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        topic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        telephoneNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'sellers',
                key: 'sellerId'
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories',
                key: 'categoryId'
            }
        },
        locationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'locations',
                key: 'locationId'
            }
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: true,
    });

    Advertisement.associate = models => {
        Advertisement.belongsTo(models.sellers, { foreignKey: 'sellerId', as: 'seller' });
        Advertisement.belongsTo(models.categories, { foreignKey: 'categoryId', as: 'category' });
        Advertisement.belongsTo(models.locations, { foreignKey: 'locationId', as: 'location' });
        Advertisement.hasMany(models.images, { foreignKey: 'adId', as: 'images' });
    };

    return Advertisement;
};
