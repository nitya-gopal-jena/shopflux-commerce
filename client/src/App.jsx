import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import PublicRoutes from './components/routes/PublicRoutes';
import ProductRoutes from './components/routes/ProductRoutes';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {PublicRoutes()}
          {ProductRoutes()}
        </Routes>
      </Router>
    </>
  );
};

export default App;
