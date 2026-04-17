import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/j1/getAllProd');
        setProducts(response.data.allProducts);
      } catch (error) {
        console.error('Something went wrong when fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h2>Product List</h2>

      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.productName} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
