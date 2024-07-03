const { Sequelize } = require('sequelize');

// Connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'C:\\Users\\tbargach\\Desktop\\alten-shop-bach-products\\back\\database.sqlite',
  logging: false
});

// Export the Sequelize instance
module.exports = sequelize;
