const { Product } = require('../models'); 


const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.create({ code, name, price, description, quantity, inventoryStatus, category, rating, image });
    res.json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const { code, name, price, description, quantity, inventoryStatus, category, rating, image} = req.body;
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404).send('Product not found');
    } else {
      /*product.name = name;
      product.price = price;
      product.description = description;*/
      product = { code, name, price, description, quantity, inventoryStatus, category, rating, image }
      await product.save();
      res.json({ message: 'Product updated successfully', product });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      await product.destroy();
      res.send('Product deleted successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


module.exports = { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById};