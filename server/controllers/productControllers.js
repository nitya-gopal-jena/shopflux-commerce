const Product = require('../models/productModel.js')


// Add product 
const addProduct = async (req, res) => {
    try {

        const { productName, brand, price, rating, description, category, subCategory } = req.body;
        if (!productName || !brand || !price || !rating || !description || !category || !subCategory) {
            return res.status(400).json({ message: 'Provide all the fields' });
        }

        const newProduct = new Product({ productName, brand, price, rating, description, category, subCategory });
        await newProduct.save();
        return res.status(200).json({ message: 'Product added successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
}

// Get all products 
const getallProducts = async (req, res) => {
    try {

        const allProducts = await Product.find();
        return res.status(200).json({ message: 'All product fetched', allProducts });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
}


// Get product by id 
const getProductById = async (req, res) => {
    try {

        const id = req.params.id;
        const isProdExist = await Product.findById(id);
        if (!isProdExist) {
            return res.status(400).json({ message: 'The product you are looking for it not exist' });
        }
        return res.status(200).json({ message: 'Product Found', isProdExist });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
}

// Update details by product id 
const updateProduct = async (req, res) => {
    try {

        const id = req.params.id;
        const newData = req.body;

        const isProdExist = await Product.findByIdAndUpdate(id, newData, { new: true });
        if (!isProdExist) {
            return res.status(400).json({ message: 'Product not exist' })
        }

        return res.status(200).json({ message: 'Product updated successfully', isProdExist });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
    }
}

// Delete product 
const deleteProduct = async (req, res) => {
    try {

        const id = req.params.id;
        const isProdExist = await Product.findByIdAndDelete(id);
        if (!isProdExist) {
            return res.status(400).json({ message: 'Product not exist' });
        }

        return res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'Iinternal server error', error });
    }
}






module.exports = { addProduct, getallProducts, getProductById, updateProduct, deleteProduct }