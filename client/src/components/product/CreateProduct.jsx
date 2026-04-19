import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    price: '',
    rating: '',
    description: '',
    category: '',
    subCategory: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/j1/add-prod', formData);
      setMessage(res.data.message);
      setFormData({
        productName: '',
        brand: '',
        price: '',
        rating: '',
        description: '',
        category: '',
        subCategory: '',
      });

      navigate('/admin-dashboard');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error adding product');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6'>
      <form onSubmit={handleSubmit} className='w-full max-w-3xl bg-white border border-gray-200 rounded shadow-sm p-8 space-y-6'>
        <div className='text-center space-y-1'>
          <h2 className='text-2xl font-semibold text-slate-800 tracking-tight uppercase font-bold'>Add Product</h2>
          <p className='text-sm text-slate-500'>Create a new product listing</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {/* Product Name */}
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-1'>Product Name</label>
            <input type='text' name='productName' value={formData.productName} onChange={handleChange} className='input' placeholder='iPhone 15 Pro' required />
          </div>

          {/* Brand */}
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-1'>Brand</label>
            <input type='text' name='brand' value={formData.brand} onChange={handleChange} className='input' placeholder='Apple' required />
          </div>

          {/* Price */}
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-1'>Price</label>
            <input type='number' name='price' value={formData.price} onChange={handleChange} className='input' placeholder='₹99999' required />
          </div>

          {/* Rating */}
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-1'>Rating</label>
            <input type='number' name='rating' value={formData.rating} onChange={handleChange} min='0' max='5' step='0.1' className='input' placeholder='4.5' required />
          </div>

          {/* Category */}
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-1'>Category</label>
            <select name='category' value={formData.category} onChange={handleChange} className='input' required>
              <option value=''>Select category</option>
              <option value='electronics'>Electronics</option>
              <option value='fashion'>Fashion</option>
            </select>
          </div>

          {/* SubCategory */}
          <div>
            <label className='block text-sm font-medium text-gray-800 mb-1'>SubCategory</label>
            <input type='text' name='subCategory' value={formData.subCategory} onChange={handleChange} className='input' placeholder='Smartphones' required />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className='block text-sm font-medium text-gray-800 mb-1'>Description</label>
          <textarea name='description' value={formData.description} onChange={handleChange} rows='4' className='input' placeholder='Write a short description...' required />
        </div>

        {/* BUTTON */}
        <button
          type='submit'
          className='w-full py-3 text-white text-sm font-semibold rounded-lg 
  bg-black hover:bg-gray-900 
  transition duration-200 active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer'
        >
          Add Product
        </button>
        {/* MESSAGE */}
        {message && <p className='text-center text-sm text-green-600 font-medium'>{message}</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
