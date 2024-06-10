module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Category.associate = models => {
        Category.hasMany(models.advertisements, { foreignKey: 'categoryId', as: 'advertisements' });
    };

    return Category;
};
