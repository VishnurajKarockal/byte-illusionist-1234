// MarketplaceGrid.jsx

import React, { useState, useEffect } from 'react';
import ProductListing from './ProductListing';
import './MarketplaceGrid.css'; // Import CSS file for styling grid layout

const MarketplaceGrid = () => {
  // State to store product data and loading state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call with sample data
        const response = await fetch('http://localhost:8080/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MarketplaceGrid;
