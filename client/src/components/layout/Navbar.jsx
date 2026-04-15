import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] border-b border-gray-700/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-4'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='text-2xl font-extrabold tracking-wide'>
            <Link to='/'>
              Shop<span className='text-yellow-400'>Flux</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 font-medium'>
            <Link to='/' className='hover:text-yellow-300 transition'>
              Home
            </Link>
            <Link to='/about' className='hover:text-yellow-300 transition'>
              About
            </Link>
            <Link to='/services' className='hover:text-yellow-300 transition'>
              Services
            </Link>
            <Link to='/contact' className='hover:text-yellow-300 transition'>
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className='hidden md:flex items-center space-x-6 text-lg'>
            {/* Search */}
            <button className='hover:text-yellow-300 transition'>
              <FaSearch />
            </button>

            {/* Cart */}
            <Link to='/cart' className='hover:text-yellow-300 transition relative'>
              <FaShoppingCart />
              {/* Optional badge */}
              <span className='absolute -top-2 -right-3 bg-yellow-400 text-black text-xs px-1 rounded-full'>2</span>
            </Link>

            {/* Login */}
            <Link
              to='/login'
              className='min-w-[120px] px-8 py-1.5 text-center rounded-lg 
             border border-yellow-400 text-yellow-400 font-semibold
             transition-all duration-300 ease-in-out
             hover:bg-yellow-400 hover:text-black hover:scale-105'
            >
              Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className='md:hidden flex items-center space-x-4'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-5 space-y-4 font-medium'>
          {/* Navigation Links */}
          <div className='flex flex-col space-y-3 pt-2'>
            <Link to='/' className='hover:text-yellow-300 transition'>
              Home
            </Link>

            <Link to='/about' className='hover:text-yellow-300 transition'>
              About
            </Link>

            <Link to='/services' className='hover:text-yellow-300 transition'>
              Services
            </Link>

            <Link to='/contact' className='hover:text-yellow-300 transition'>
              Contact
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className='flex flex-col space-y-4 pt-4 text-lg'>
            {/* Icons Row */}
            <div className='flex items-center justify-center space-x-8'>
              <button className='hover:text-yellow-300 transition'>
                <FaSearch />
              </button>

              <Link to='/cart' className='hover:text-yellow-300 transition relative'>
                <FaShoppingCart />
              </Link>
            </div>

            {/* Login Button */}
            <Link
              to='/login'
              className='w-full text-center px-6 py-2
               rounded-lg border border-yellow-400 text-yellow-400 font-semibold
               transition-all duration-300 ease-in-out
               hover:bg-yellow-400 hover:text-black hover:scale-105'
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
