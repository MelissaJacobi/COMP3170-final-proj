import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";
import pastry from "../assets/images/pastry.jpg";

export default function Pastries() {
  const productNames = [
    "Croissant",
    "Chocolate Cake",
    "Chocolate Croissant",
    "Almond Nut Brownie",
    "Lime Pistacchio Tart",
    "Raspberry Cheesecake",
    "Fruit Danish",
    "Lemon Tart",
  ];
  
  const imageUrls = [
    "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6390644/pexels-photo-6390644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1346217/pexels-photo-1346217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29653155/pexels-photo-29653155/free-photo-of-delicious-cheesecake-with-berry-sauce-and-fresh-fruits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/23369274/pexels-photo-23369274/free-photo-of-puff-pastry-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18784896/pexels-photo-18784896/free-photo-of-cookie-with-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  
  const placeholderProducts = Array.from({ length: 8 }, (_, i) => ({
    name: productNames[i % productNames.length],
    price: `${(i + 1) * 10}.00`,
    description: `Description for Product ${i + 1}`,
    imageUrl: imageUrls[i % imageUrls.length],
  }));

  const [products, setProducts] = useState(placeholderProducts);

  const [productName, setProductName] = useState(""); 
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (productName.trim() && productPrice.trim() && productDescription.trim() && productImageUrl.trim()) {
      const newProduct = { 
        name: productName,
        price: productPrice,
        description: productDescription,
        imageUrl: productImageUrl
      };

      const updatedProducts = [newProduct, ...products];
      setProducts(updatedProducts);

      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductImageUrl("");
    }
  };

  const toggleFormVisibility = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>Pastries</h1>
        <img src={pastry} alt="tart"/>
      </div>

      <button onClick={toggleFormVisibility} className={styles.toggleFormButton}>
        {showForm ? "Hide Form" : "Add New Product"}
      </button>

      {showForm && (
        <form onSubmit={handleAddProduct} className={styles.addProductForm}>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            className={styles.productInput}
          />
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter product price"
            className={styles.productInput}
          />
          <input
            type="text"
            value={productImageUrl}
            onChange={(e) => setProductImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className={styles.productInput}
          />
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Enter product description"
            className={styles.productInput}
          />
          <button type="submit" className={styles.addButton}>Add Product</button>
        </form>
      )}

      <div className={styles.products}>
        {products.map((product, index) => (
          <Product 
            key={index} 
            name={product.name} 
            price={product.price} 
            description={product.description} 
            imageUrl={product.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}
