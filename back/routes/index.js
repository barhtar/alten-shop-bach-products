const express = require("express");
const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById} = require("../utils/product");

const router = express.Router();

router.route("/products")
    .get(getAllProducts)
    .post(createProduct);
router.route("/products/:id")
    .get(getProductById)
    .put(updateProductById)
    // Delete a product by ID
    .delete(deleteProductById)
// Export the router
module.exports = router;