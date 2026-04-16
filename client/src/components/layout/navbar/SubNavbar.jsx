import { NavLink } from 'react-router-dom';
import { FaMobileAlt, FaLaptop, FaTv, FaMale, FaFemale, FaChild } from 'react-icons/fa';

const SubNavbar = () => {
  const activeNavLink = ({ isActive }) => `flex flex-col items-center transition ${isActive ? 'text-cyan-600 font-semibold' : 'text-gray-600'}`;

  return (
    <nav className='bg-white text-gray-700 border-b border-gray-700/50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-4'>
        <div className='flex justify-between h-16 items-center'>
          {/* Desktop Menu */}
          <div className='hidden md:flex flex-1 justify-evenly font-medium'>
            <NavLink to='/mobiles' className={activeNavLink}>
              <FaMobileAlt size={20} />
              <span>Mobiles</span>
            </NavLink>
            <NavLink to='/laptops' className={activeNavLink}>
              <FaLaptop size={20} />
              <span>Laptops</span>
            </NavLink>
            <NavLink to='/tv' className={activeNavLink}>
              <FaTv size={20} />
              <span>Tv</span>
            </NavLink>
            <NavLink to='/men' className={activeNavLink}>
              <FaMale size={20} />
              <span>Men</span>
            </NavLink>
            <NavLink to='/women' className={activeNavLink}>
              <FaFemale size={20} />
              <span>Women</span>
            </NavLink>
            <NavLink to='/kids' className={activeNavLink}>
              <FaChild size={20} />
              <span>Kids</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
