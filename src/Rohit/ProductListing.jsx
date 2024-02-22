// ProductListing.js

import React from 'react';

const ProductListing = ({ product }) => {
  return (
    <div className="product-listing">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <div className="product-price">${product.price}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-location">{product.location}</div>
      </div>
    </div>
  );
};

export default ProductListing;
