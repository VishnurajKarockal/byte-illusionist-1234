import React from 'react';
import { toast } from 'react-toastify'; // Import toast from react-toastify for displaying messages

const ProductListing = ({ product }) => {
  // Function to handle the click event of the "Interested" button
  const handleInterestedClick = () => {
    // Display toast message
    toast.success('Your message has been sent. You will receive a notification shortly.', {
      position: toast.POSITION.TOP_RIGHT // Set toast position
    });
  };

  return (
    <div className="product-listing">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <div className="product-price">${product.price}</div>
        <div className="product-location">{product.location}</div>
        {/* "Interested" button */}
        <button onClick={handleInterestedClick} className="interested-button">Interested</button>
      </div>
    </div>
  );
};

export default ProductListing;
