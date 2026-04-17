import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='bg-linear-to-br from-gray-900 via-gray-800 to-black text-white mb-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20'>
        {/* Modern Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Section */}
          <div className='flex flex-col justify-center space-y-6'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
              Upgrade Your <span className='text-indigo-400'>Lifestyle</span>
            </h1>

            <p className='text-gray-300 text-lg max-w-xl'>Discover premium fashion, accessories, and tech essentials crafted for modern living. Style meets performance.</p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                to='/carts'
                className='bg-[#14BDAD] text-white px-6 py-3 rounded-xl font-medium shadow-lg transition hover:bg-linear-to-r hover:from-[#14BDAD] hover:to-[#0FA297]'
              >
                Shop Collection
              </Link>

              <Link to='/product-list' className='border border-gray-600 hover:border-white px-6 py-3 rounded-xl font-medium transition'>
                Explore More
              </Link>
            </div>

            {/* Stats */}
            <div className='flex gap-8 pt-6'>
              <div>
                <p className='text-2xl font-bold'>10K+</p>
                <p className='text-gray-400 text-sm'>Products</p>
              </div>
              <div>
                <p className='text-2xl font-bold'>5K+</p>
                <p className='text-gray-400 text-sm'>Customers</p>
              </div>
              <div>
                <p className='text-2xl font-bold'>4.8★</p>
                <p className='text-gray-400 text-sm'>Rating</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className='relative flex justify-center items-center'>
            {/* Glow Background */}
            <div className='absolute w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full'></div>
            <img
              src='https://www.bringitonline.in/uploads/2/2/4/5/22456530/garment-photoshoot-skirts-dresses-shirts-sweaters-trousers-coats-chemises-and-jeans-photography-bringitonline-45_1.jpeg'
              alt='Fashion'
              className='relative rounded-2xl shadow-2xl w-full max-w-md border border-gray-700'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
