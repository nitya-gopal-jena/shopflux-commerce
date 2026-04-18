import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaShoppingCart, FaUsers, FaChartLine } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { FaPlus, FaList, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: <MdDashboard /> },
    { name: 'Orders', icon: <FaShoppingCart /> },
    { name: 'Customers', icon: <FaUsers /> },
    { name: 'Analytics', icon: <FaChartLine /> },
    { name: 'Settings', icon: <FiSettings /> },
  ];

  // Add Product button handler
  function addProductBtn() {
    navigate('/create-prod');
  }

  return (
    <>
      <div className={`flex bg-gray-100 h-screen ${darkMode ? 'dark' : ''} dark:bg-gray-900`}>
        {/* SideNavbar  */}
        <div
          className={`fixed bg-white w-64 h-screen shadow  ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} lg:translate-x-0 lg:static ${darkMode ? 'dark' : ''} dark:bg-black`}
        >
          <div className='p-4 flex justify-between border-b'>
            <div className={`text-xl font-bold ${darkMode ? 'dark' : ''} dark:text-white`}>
              Hello <span className='text-[#7C86FF]'>Admin</span>
            </div>
            <button className={`lg:hidden ${darkMode ? 'dark' : ''} dark:text-white`} onClick={() => setSidebarOpen(false)}>
              X
            </button>
          </div>

          {/* navigation bar  */}
          <div className='p-4 space-y-2'>
            {navItems.map((item) => (
              <div key={item.name} className={`flex items-center space-x-3 p-2  ${darkMode ? '' : 'hover:bg-gray-200'} rounded cursor-pointer`}>
                <span className='flex items-center text-xl text-black  dark:text-white dark:hover:text-[#7C86FF]'>
                  {item.icon}
                  <span className='ml-2 font-medium'>{item.name}</span>
                </span>
              </div>
            ))}
          </div>

          {/* dark mode button  */}
          <div className='absolute bottom-20 left-4'>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-400'}`}
            >
              <span className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300  ${darkMode ? 'translate-x-8' : 'translate-x-0'}`} />
              <span className='absolute left-2 text-xs'>🌙</span>
              <span className='absolute right-2 text-xs'>☀️</span>
            </button>
          </div>
        </div>

        {/* Main Dashboard  */}
        <main className='flex-1'>
          <header className={`bg-white flex justify-between p-4 ${darkMode ? 'dark' : ''} dark:bg-gray-900 dark:border-b dark:border-gray-700 `}>
            <button className={`p-2 font-bold lg:hidden ${darkMode ? 'dark' : ''} dark:text-white`} onClick={() => setSidebarOpen(true)}>
              =
            </button>
            <h1 className={`text-2xl font-bold ${darkMode ? 'dark' : ''} dark:text-white`}>Dashboard</h1>
            <div className='bg-gray-300 w-10 rounded-full'></div>
          </header>

          {/* all cards  */}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4'>
            <div className={`bg-white p-6 shadow-lg rounded-lg ${darkMode ? 'dark' : ''} dark:bg-gray-700`}>
              <h2 className={`text-xl font-bold ${darkMode ? 'dark' : ''} dark:text-white`}>card</h2>
              <p className={`text-lg text-gray-700 p-1 ${darkMode ? 'dark' : ''} dark:text-gray-100`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, saepe!</p>
            </div>

            <div className={`bg-white p-6 shadow-lg rounded-lg ${darkMode ? 'dark' : ''} dark:bg-gray-700`}>
              <h2 className={`text-xl font-bold ${darkMode ? 'dark' : ''} dark:text-white`}>card</h2>
              <p className={`text-lg text-gray-700 p-1 ${darkMode ? 'dark' : ''} dark:text-gray-100`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, saepe!</p>
            </div>

            <div className={`bg-white p-6 shadow-lg rounded-lg ${darkMode ? 'dark' : ''} dark:bg-gray-700`}>
              <h2 className={`text-xl font-bold ${darkMode ? 'dark' : ''} dark:text-white`}>card</h2>
              <p className={`text-lg text-gray-700 p-1 ${darkMode ? 'dark' : ''} dark:text-gray-100`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, saepe!</p>
            </div>
          </div>

          {/* All product operation buttons  */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4'>
            <button
              className='flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-sm shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform uppercase cursor-pointer'
              onClick={addProductBtn}
            >
              <FaPlus /> add Product
            </button>

            <button className='flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-sm shadow-lg hover:bg-green-600 hover:scale-105 transition-transform uppercase cursor-pointer '>
              <FaList /> get All Prod
            </button>

            <button className='flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-sm shadow-lg hover:bg-yellow-600 hover:scale-105 transition-transform uppercase cursor-pointer'>
              <FaEdit /> update Prod
            </button>

            <button className='flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-sm shadow-lg hover:bg-red-600 hover:scale-105 transition-transform uppercase cursor-pointer'>
              <FaTrash /> delete Prod
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
