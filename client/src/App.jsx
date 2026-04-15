import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import About from './components/pages/About';

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
