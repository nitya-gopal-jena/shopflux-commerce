const express = require('express');
const {getAllItems} = require('../controllers/productControllers.js')

const productRoute = express.Router();

productRoute.get('/getAllItems', getAllItems);





module.exports = productRoute;