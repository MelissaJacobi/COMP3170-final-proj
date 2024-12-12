import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";
import seasonal from "../assets/images/seasonal.jpg";

export default function Seasonal() {
  const productNames = [
    "Creme Brulee Cheesecake",
    "Coconut Pudding",
    "Croquembouche",
    "Hot Peppermint Chocolate",
    "Raspberry Cupcake",
    "Christmas Pudding",
    "Pavlova",
    "Cookie Bundle",
  ];
  
  const imageUrls = [
    "https://as1.ftcdn.net/v2/jpg/10/38/29/86/1000_F_1038298699_pPEFAiIuEEGmmMaBAoMrGUo91CDhE2y1.jpg",
    "https://as1.ftcdn.net/v2/jpg/09/84/12/04/1000_F_984120488_MiGvbHh7fmqvpFdbPRxJGVeDBdvepIHm.jpg",
    "https://as1.ftcdn.net/v2/jpg/08/92/50/72/1000_F_892507290_xs5ZzDBWG76Ept0v20uTXN0VBUZjm3Bi.jpg",
    "https://images.pexels.com/photos/19404174/pexels-photo-19404174/free-photo-of-cup-of-hot-chocolate-with-whipped-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/10530450/pexels-photo-10530450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://as2.ftcdn.net/v2/jpg/02/36/05/79/1000_F_236057972_nq5BTat7JFp0GrVyePHrdBxUHQL46Gcj.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/39/18/81/1000_F_239188145_EkMB1wJaXnrrZuy5xhkrrCcio3JYdBNi.jpg",
    "https://images.pexels.com/photos/6107467/pexels-photo-6107467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        <h1>Seasonal</h1>
        <img src={seasonal} alt="seasonal treats"/>
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
