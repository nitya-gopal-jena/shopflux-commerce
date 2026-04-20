const express = require('express');
const { getallProducts, addProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productControllers.js')

const productRoute = express.Router();

productRoute.post('/add-prod', addProduct);
productRoute.get('/getAllProd', getallProducts);
productRoute.get('/getProd/:id', getProductById);
productRoute.put('/update-prod/:id', updateProduct);
productRoute.delete('/product/:id', deleteProduct)




module.exports = productRoute;