import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaShoppingCart, FaUsers, FaChartLine, FaPlus } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ProductListTable from './ProductListTable';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: <MdDashboard /> },
    { name: 'Orders', icon: <FaShoppingCart /> },
    { name: 'Customers', icon: <FaUsers /> },
    { name: 'Analytics', icon: <FaChartLine /> },
    { name: 'Settings', icon: <FiSettings /> },
  ];

  // Handlers
  const addProduct = () => navigate('/create-prod');
  const updateProduct = (id) => navigate(`/update-prod/${id}`);
  const deleteProduct = (id) => navigate(`/delete-prod/${id}`);

  return (
    <div className='flex bg-gray-100 h-screen'>
      {/* Sidebar */}
      <div className={`fixed bg-white w-64 h-screen shadow ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} lg:translate-x-0 lg:static`}>
        <div className='p-4 flex justify-between border-b'>
          <div className='text-xl font-bold'>
            Hello <span className='text-[#7C86FF]'>Admin</span>
          </div>
          <button className='lg:hidden' onClick={() => setSidebarOpen(false)}>
            X
          </button>
        </div>

        {/* Navigation */}
        <div className='p-4 space-y-2'>
          {navItems.map((item) => (
            <div key={item.name} className='flex items-center space-x-3 p-2 hover:bg-gray-200 rounded cursor-pointer'>
              <span className='flex items-center text-xl text-black'>
                {item.icon}
                <span className='ml-2 font-medium'>{item.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Dashboard */}
      <main className='flex-1'>
        <header className='bg-white flex justify-between items-center p-4 shadow'>
          <button className='p-2 font-bold lg:hidden' onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
          <div className='bg-gray-300 w-10 h-10 rounded-full'></div>
        </header>

        {/* Product Table */}
        <div className='p-6 bg-gray-50 min-h-screen'>
          <div className='flex justify-between items-center mb-6'>
            <div>
              <h2 className='text-xl font-semibold text-gray-900'>Products</h2>
              <p className='text-sm text-gray-500'>Manage your inventory</p>
            </div>

            <button onClick={addProduct} className='flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition'>
              <FaPlus className='text-xs' />
              Add Product
            </button>
          </div>

          {/* Product List Table Page  */}
          <ProductListTable />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
