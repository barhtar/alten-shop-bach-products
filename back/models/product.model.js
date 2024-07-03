const { DataTypes } = require('sequelize');

const sequelize = require('../db');

// Define a model for the 'products' table
const Product = sequelize.define('product', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    inventoryStatus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: false,
    updatedAt: false,
},
{
  tableName: "product"
});

module.exports = Product;