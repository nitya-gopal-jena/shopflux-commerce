const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ['electronics', 'fashion'] , required:true},
  },
  { timeStamps: true },
);

const Product = mongoose.model('PRODUCT', productSchema);
module.exports = Product;
