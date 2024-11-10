import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";

export default function Pastries() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chocolate Croissant",
      imageUrl: "https://via.placeholder.com/150",
      price: 3.99,
      description: "A delicious chocolate-filled croissant."
    }
  ]);
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

    if (!formData.name || !formData.imageUrl || !formData.price || !formData.description) {
      alert("Please fill in all fields.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      imageUrl: formData.imageUrl,
      price: parseFloat(formData.price),
      description: formData.description
    };

    if (isNaN(newProduct.price)) {
      alert("Please enter a valid price.");
      return;
    }

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
          type="url"
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
          step="0.01"
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
          <Product 
            key={product.id} 
            name={product.name} 
            imageUrl={product.imageUrl} 
            price={product.price} 
            description={product.description} 
          />
        ))}
      </div>
    </div>
  );
}
