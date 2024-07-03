const products = require('../db/products.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('product', products.data , {});
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('product', null, {});
  }
};
