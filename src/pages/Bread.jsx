import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";
import bread from "../assets/images/bread.jpg";

export default function Bread() {
  const productNames = [
    "French Baguette",
    "Sourdough",
    "Rye Bread",
    "Ciabatta",
    "Focaccia",
    "Multigrain Bread",
    "Pita Bread",
    "Brioche Buns",
  ];
  
  const imageUrls = [
    "https://as2.ftcdn.net/v2/jpg/08/61/54/75/1000_F_861547505_HbsmGLXqLTvNfe7wgTDjAAPC7vih6SlY.jpg",
    "https://as1.ftcdn.net/v2/jpg/01/28/30/92/1000_F_128309284_WKdyAq271bsntmCjtRfNCg0uNEOVrxPD.jpg",
    "https://as2.ftcdn.net/v2/jpg/01/16/40/01/1000_F_116400193_VNiO98PlemhhtPbafbRf0U59fRIAboMw.jpg",
    "https://as2.ftcdn.net/v2/jpg/10/55/45/79/1000_F_1055457919_TXXd2mTQQvPvSzeErFv96LHSqmsqLQmt.jpg",
    "https://as2.ftcdn.net/v2/jpg/01/66/38/89/1000_F_166388963_9gnYZ44gooPAQfY5fIbCSRlDneiYwXew.jpg",
    "https://as2.ftcdn.net/v2/jpg/10/28/71/43/1000_F_1028714341_XPFrzlq4xOef24LgQLEsq1fXbesnkF44.jpg",
    "https://as2.ftcdn.net/v2/jpg/01/72/22/37/1000_F_172223709_SAKuj23tINunYmq64wdC0jN3cIie61MP.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/97/06/76/1000_F_297067669_2zPercOK8LOM6ifKRX9HqOzrDiryQhIJ.jpg",
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
        <h1>Bread</h1>
        <img src={bread} alt="bread"/>
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
