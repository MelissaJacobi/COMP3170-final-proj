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
    setNewProduct({ price: '', imageUrl: '', description: '', category: 'bread' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={menu} alt="menu"/>
        <h1>Menu</h1>
      </div>
      <div className={styles.options}>
        {/* Category Links */}
        <div className={styles.option}><Link to="/menu/bread" className={styles.link}><img src={bread} alt="bread"/><h2>Bread</h2></Link></div>
        <div className={styles.option}><Link to="/menu/pastries" className={styles.link}><img src={pastry} alt="pastry"/><h2>Pastries</h2></Link></div>
        <div className={styles.option}><Link to="/menu/cakes" className={styles.link}><img src={cake} alt="cake"/><h2>Cakes</h2></Link></div>
        <div className={styles.option}><Link to="/menu/drinks" className={styles.link}><img src={drinks} alt="drinks"/><h2>Drinks</h2></Link></div>
        <div className={styles.option}><Link to="/menu/seasonal" className={styles.link}><img src={seasonal} alt="seasonal"/><h2>Seasonal</h2></Link></div>
      </div>
      
      {/* Product Creation Form */}
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <h2>Add New Product</h2>
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
