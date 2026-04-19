import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductListTable = () => {
  // product data
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: '$1200', stock: 15 },
    { id: 2, name: 'Shoes', category: 'Fashion', price: '$80', stock: 50 },
    { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: '$150', stock: 20 },
  ];

  return (
    <>
      {/* TABLE CONTAINER */}
      <div className='bg-white border border-gray-200 rounded-xl overflow-hidden'>
        <table className='min-w-full text-sm'>
          <thead className='bg-indigo-50/60 border-b border-indigo-100 text-indigo-700'>
            <tr className='text-left text-gray-500'>
              <th className='px-6 py-3 font-medium'>Name</th>
              <th className='px-6 py-3 font-medium'>Category</th>
              <th className='px-6 py-3 font-medium'>Price</th>
              <th className='px-6 py-3 font-medium'>Stock</th>
              <th className='px-6 py-3 font-medium text-center'>Actions</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {products.map((prod) => (
              <tr key={prod.id} className='hover:bg-gray-50 transition'>
                {/* NAME */}
                <td className='px-6 py-4 font-medium text-gray-900'>{prod.name}</td>

                {/* CATEGORY */}
                <td className='px-6 py-4 text-gray-600'>{prod.category}</td>

                {/* PRICE */}
                <td className='px-6 py-4 text-gray-900 font-medium'>₹{prod.price}</td>

                {/* STOCK BADGE */}
                <td className='px-6 py-4'>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                      prod.stock > 10
                        ? 'bg-green-50 text-green-700 ring-1 ring-green-600/20'
                        : prod.stock > 0
                          ? 'bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20'
                          : 'bg-red-50 text-red-700 ring-1 ring-red-600/20'
                    }`}
                  >
                    {prod.stock} units
                  </span>
                </td>

                {/* ACTIONS */}
                <td className='px-6 py-4'>
                  <div className='flex justify-center gap-2'>
                    <button
                      onClick={() => updateProduct(prod.id)}
                      className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                                bg-gradient-to-b from-indigo-50 to-indigo-100/70 
                               text-indigo-700 text-xs font-medium
                                border border-indigo-100
                                shadow-sm hover:shadow-md 
                                hover:-translate-y-[1px] hover:bg-indigo-100
                                active:scale-95
                                transition-all duration-200'
                    >
                      <FaEdit size={13} />
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(prod.id)}
                      className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
                                bg-gradient-to-b from-red-50 to-red-100/70 
                                text-red-600 text-xs font-medium
                                border border-red-100
                                shadow-sm hover:shadow-md 
                                hover:-translate-y-[1px] hover:bg-red-100
                                active:scale-95
                                transition-all duration-200'
                    >
                      <FaTrash size={13} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductListTable;
