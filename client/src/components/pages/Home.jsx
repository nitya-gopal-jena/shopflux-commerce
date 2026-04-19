import { Link } from 'react-router-dom';
import { FaUndoAlt, FaMoneyBillWave, FaTags } from 'react-icons/fa';
import section_poster from '../../assets/poster.png';

const Home = () => {
  return (
    <>
      <section className='bg-indigo-50 text-gray-900'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Text Section */}
            <div className='flex flex-col justify-center space-y-4 sm:space-y-6 animate-fadeIn order-1 lg:order-1'>
              <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight'>
                Upgrade Your <span className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>Lifestyle</span>
              </h1>

              <p className='text-gray-600 text-sm sm:text-base lg:text-lg max-w-md tracking-wide'>
                Discover premium fashion, accessories, and tech essentials crafted for modern living. Style meets performance.
              </p>

              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <Link
                  to='/carts'
                  className='bg-[#14BDAD] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl text-center'
                >
                  Shop Collection
                </Link>

                <Link
                  to='/product-list'
                  className='border border-gray-400 text-gray-700 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium transition duration-300 hover:bg-gray-100 hover:text-gray-900 hover:border-teal-300 text-center'
                >
                  Explore More
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className='relative flex justify-center items-center order-2 lg:order-2 mt-8 lg:mt-0'>
              <div className='group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 w-full max-w-xs sm:max-w-sm md:max-w-md'>
                <img
                  src='https://www.bringitonline.in/uploads/2/2/4/5/22456530/garment-photoshoot-skirts-dresses-shirts-sweaters-trousers-coats-chemises-and-jeans-photography-bringitonline-45_1.jpeg'
                  alt='Fashion'
                  className='w-full transform transition duration-500 group-hover:scale-105 group-hover:rotate-1'
                />
                <div className='absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition duration-500'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className='bg-green-50 px-4 p-2 flex justify-around items-center mt-2 mb-5 w-[95%] mx-auto  rounded-lg shadow-sm border border-green-300'>
        <span className='text-gray-700 flex items-center gap-2 font-medium '>
          <FaUndoAlt className='text-green-600' /> 7 Days Easy Return
        </span>
        <span className='text-gray-700 flex items-center gap-2 font-medium'>
          <FaMoneyBillWave className='text-green-600' /> Cash on Delivery
        </span>
        <span className='text-gray-700 flex items-center gap-2 font-medium'>
          <FaTags className='text-green-600' /> Lowest Prices
        </span>
      </section>

      {/* Poster section */}
      <section className='w-full bg-white py-10'>
        <div className='w-full mx-auto shadow-xl border border-gray-200 overflow-hidden relative'>
          {/* Poster Image */}
          <img src={section_poster} alt='Poster' className='w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-center' />

          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-md'>
              Top
              <span
                className='sm:text-4xl lg:text-5xl font-bold 
          bg-gradient-to-r from-yellow-400 via-yellow-200 to-white 
          bg-clip-text text-transparent drop-shadow-md'
              >
                Tech Deals!
              </span>
            </h2>

            <p className='mt-3 text-base sm:text-lg lg:text-xl text-gray-100 max-w-xl '>Upgrade your gadgets today in style</p>

            <button className='mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
