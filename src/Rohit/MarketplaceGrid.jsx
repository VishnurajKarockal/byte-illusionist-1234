import React, { useState, useEffect } from 'react';
import ProductListing from './ProductListing';
import "./MarketplaceGrid.css";
import { url } from '../Resources.js'


const MarketplaceGrid = () => {
  const [products, setProducts] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const productsData = await response.json();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (searchCategory !== '') {
      filtered = filtered.filter(product => product.category === searchCategory);
    }
    if (searchTerm !== '') {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (sortOption === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filtered);
  }, [searchCategory, searchTerm, sortOption, products]);

  // Logic to get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearchCategory = (category) => {
    setSearchCategory(category);
    setCurrentPage(1); // Reset current page when category changes
  };

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset current page when search term changes
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleReset = () => {
    setSearchCategory('');
    setSearchTerm('');
    setSortOption('');
    setCurrentPage(1); // Reset current page
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{marginTop:"30px"}}>
      <div>
        <select id="category-select" className="category-select" onChange={(e) => handleSearchCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Apparel</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Musical_Instruments">Musical Instruments</option>
          <option value="Sports">Sports</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => handleSearchTerm(e.target.value)}
        />
        <select id="sort-select" className="sort-select" onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">Sort by</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
        <button id="reset-btn" onClick={handleReset}>Reset</button>
      </div>
      <div className="grid-container">
        {currentItems.map((product) => (
          <ProductListing key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceGrid;
