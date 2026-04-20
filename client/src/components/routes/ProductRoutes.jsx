import { Routes, Route } from 'react-router-dom';
import CreateProduct from '../product/CreateProduct';
import ProductList from '../product/ProductList';
import UpdateProduct from '../product/UpdateProduct';

const ProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='product-list' element={<ProductList />} />
        <Route path='create-prod' element={<CreateProduct />} />
        <Route path='update-prod/:prodId' element={<UpdateProduct />} />
      </Routes>
    </>
  );
};

export default ProductRoutes;
