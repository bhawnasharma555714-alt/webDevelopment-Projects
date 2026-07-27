import { useState, useEffect, useRef } from 'react';  
import { products } from '../data/products';  
import ProductCard from '../components/ProductCard';  
  
export default function Home() {  
  const [searchTerm, setSearchTerm] = useState(''); // controlled input value  
  const [productList, setProductList] = useState([]);  
  const searchInputRef = useRef(null); // direct reference to the DOM input  
  
  // useEffect #1: simulate fetching products when the page first loads  
  useEffect(() => {  
    console.log('Fetching products...');  
    setProductList(products);  
  }, []); // empty array = runs once, on mount  
  
  // useEffect #2: auto-focus the search box as soon as the page loads  
  useEffect(() => {  
    searchInputRef.current.focus();  
  }, []);  
  
  const filteredProducts = productList.filter((p) =>  
    p.name.toLowerCase().includes(searchTerm.toLowerCase())  
  );  
  
  return (  
    <div className="page">  
      <input  
        ref={searchInputRef}  
        type="text"  
        placeholder="Search products, e.g. Shoes"  
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}  
        className="search-input"  
      />  
  
      <div className="product-grid">  
        {filteredProducts.length > 0 ? (  
          filteredProducts.map((product) => (  
            <ProductCard key={product.id} product={product} />  
          ))  
        ) : (  
          <p>No products found. Try another search, Ramesh!</p>  
        )}  
      </div>  
    </div>  
  );  
}  