import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";
import drinks from "../assets/images/drinks.jpg";

export default function Drinks() {
  const productNames = [
    "French Latte",
    "Matcha Latte",
    "Hot Chocolate",
    "Espresso",
    "Tea",
    "Peach Mint Iced Tea",
    "Lavander Latte",
    "Pumpkin Cinnamon",
  ];
  
  const imageUrls = [
    "https://as1.ftcdn.net/v2/jpg/02/19/36/48/1000_F_219364830_kM6QnXD5LRAP9earti3RDFcZHlKdlN2L.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/19/10/30/1000_F_219103018_NAHAR3yEAGGylugrZeQ0w8qj6DNIAKfO.jpg",
    "https://as2.ftcdn.net/v2/jpg/10/29/38/07/1000_F_1029380739_tU8FTGSVSJJtLWqTy3SY1twLYkTTnkqN.jpg",
    "https://as2.ftcdn.net/v2/jpg/09/12/79/85/1000_F_912798532_9LloDpCtpGXuoj0SBVYFgGwa4Ry3dIll.jpg",
    "https://as2.ftcdn.net/v2/jpg/01/98/93/59/1000_F_198935939_rvUXMPDkMfSE66I4tDXG5qu7ghhBZr7H.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/76/96/61/1000_F_276966107_FkB0l7HbWu8Zp4q8YM8RlvudrHsFtXRy.jpg",
    "https://as2.ftcdn.net/v2/jpg/08/92/82/85/1000_F_892828526_lyacPvunJCJhHYcemKuwcD9gOzmSbs7s.jpg",
    "https://as2.ftcdn.net/v2/jpg/08/67/72/83/1000_F_867728319_yj91Ne9IATPNE7wotIQvzqXfavt3mbjy.jpg",
  ];
  
  const placeholderProducts = Array.from({ length: 8 }, (_, i) => ({
    name: productNames[i % productNames.length],
    price: `${(i + 1) * 5}.00`,
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
        <h1>Drinks</h1>
        <img src={drinks} alt="latte"/>
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
