const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productName: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        rating: { type: Number, required: true, min: 0, max: 5 },
        description: { type: String, required: true },
        category: { type: String, enum: ['electronics', 'fashion'], required: true },
    },
    { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
