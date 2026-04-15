const express = require('express');
const { getallProducts, addProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productControllers.js')

const productRoute = express.Router();

productRoute.post('/add-prod', addProduct);
productRoute.get('/getAllItems', getallProducts);
productRoute.get('/getProd/:id', getProductById);
productRoute.put('/update-prod/:id', updateProduct);
productRoute.delete('/:id', deleteProduct)




module.exports = productRoute;