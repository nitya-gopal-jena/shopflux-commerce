import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import PublicRoutes from './components/routes/PublicRoutes';
import ProductRoutes from './components/routes/ProductRoutes';

import AdminDashboard from './components/pages/admin/AdminDashboard';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {PublicRoutes()}
          {ProductRoutes()}

          <Route path='/admin-dashboard' element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
