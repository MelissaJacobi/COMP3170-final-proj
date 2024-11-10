import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Menu.module.css';
import menu from '../assets/images/menu.jpg'; 
import pastry from '../assets/images/pastry.jpg'; 
import bread from '../assets/images/bread.jpg'; 
import cake from '../assets/images/cake.jpg'; 
import drinks from '../assets/images/drinks.jpg'; 
import seasonal from '../assets/images/seasonal.jpg'; 

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '', // New field for product name
    price: '',
    imageUrl: '',
    description: '',
    category: 'bread',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({ productName: '', price: '', imageUrl: '', description: '', category: 'bread' });
  };

  return (
    <div className={styles.container}>
      {/* Existing menu layout */}
      
      {/* Product Creation Form */}
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <h2>Add New Product</h2>
        <label>Product Name: <input type="text" name="productName" value={newProduct.productName} onChange={handleChange} required /></label>
        <label>Price: <input type="text" name="price" value={newProduct.price} onChange={handleChange} required /></label>
        <label>Image URL: <input type="text" name="imageUrl" value={newProduct.imageUrl} onChange={handleChange} required /></label>
        <label>Description: <input type="text" name="description" value={newProduct.description} onChange={handleChange} required /></label>
        <label>Category:
          <select name="category" value={newProduct.category} onChange={handleChange}>
            <option value="bread">Bread</option>
            <option value="pastries">Pastries</option>
            <option value="cakes">Cakes</option>
            <option value="drinks">Drinks</option>
            <option value="seasonal">Seasonal</option>
          </select>
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
