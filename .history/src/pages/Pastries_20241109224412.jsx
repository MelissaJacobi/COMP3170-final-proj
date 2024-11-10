import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";

export default function Pastries() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price)
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setFormData({ name: "", imageUrl: "", price: "", description: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>Pastries</h1>
      </div>

      {/* Product Creation Form */}
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Add Product</button>
      </form>

      {/* Display Products */}
      <div className={styles.products}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
