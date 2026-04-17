import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/home/Home';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import About from './components/pages/About';

import ProductList from './components/product/ProductList';
import CreateProduct from './components/product/CreateProduct';
import UpdateProduct from './components/product/UpdateProduct';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/product-list' element={<ProductList />} />
          <Route path='/create-prod' element={<CreateProduct />} />
          <Route path='/update-prod' element={<UpdateProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
