import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';

const PublicRoutes = () => {
  return (
    <>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
    </>
  );
};

export default PublicRoutes;
