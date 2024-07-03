const { Product } = require('../models'); 


const createProduct = async () => {
    console.log('1')
}

const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

const getProductById = async () => {
    console.log('1')
}

const updateProductById = async () => {
    console.log('1')
}

const deleteProductById = async () => {
    console.log('1')
}



module.exports = { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById};