const mongoose = require('mongoose');

const subCategories = {
  electronics: ['mobile', 'laptop', 'tv'],
  fashion: ['mens', 'womens', 'kids'],
};

const productSchema = mongoose.Schema(
  {
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: Object.keys(subCategories),
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return subCategories[this.category].includes(value);
        },
        message: 'Invalid subcategory for selected category',
      },
    },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
