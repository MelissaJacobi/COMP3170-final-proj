import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";

export default function Pastries() {
  const [products, setProducts] = useState([]); // State to store products
  const [productName, setProductName] = useState(""); // State for form input

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (productName.trim()) {
      setProducts([...products, { name: productName }]); // Add new product to array
      setProductName(""); // Clear input after adding
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>Pastries</h1>
      </div>
      
      {/* Form to add new product */}
      <form onSubmit={handleAddProduct} className={styles.addProductForm}>
        <input
          type="text"
          value={productName}
          onChange={handleNameChange}
          placeholder="Enter product name"
          className={styles.productInput}
        />
        <button type="submit" className={styles.addButton}>Add Product</button>
      </form>

      {/* Display products */}
      <div className={styles.products}>
        {products.map((product, index) => (
          <Product key={index} name={product.name} />
        ))}
      </div>
    </div>
  );
}
