import { useState } from "react";
import Product from "../components/Product";
import styles from "./Bread.module.css";
import cake from "../assets/images/cake.jpg";

export default function Cakes() {
  const productNames = [
    "Regular Heart",
    "Mini Heart",
    "Frog in a Swamp",
    "Strawberry Chocolate",
    "Strawberry Vanilla",
    "Wedding Cake",
    "Orange Citrus",
    "Chocolate Raspberry",
  ];
  
  const imageUrls = [
    "https://static.wixstatic.com/media/3a834a_358e4a24a89f4913addb1232296d921d~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a834a_358e4a24a89f4913addb1232296d921d~mv2.jpg",
    "https://static.wixstatic.com/media/3a834a_50a8edca936345caa7435c8823f72da0~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3a834a_50a8edca936345caa7435c8823f72da0~mv2.jpg",
    "https://static.wixstatic.com/media/3a834a_fcdb7ecd3e614a018059dd2b9820d7e8~mv2.png/v1/fill/w_450,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a834a_fcdb7ecd3e614a018059dd2b9820d7e8~mv2.png",
    "https://static.wixstatic.com/media/71ecae_e92fdacb3103414b890f445b747628a6~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/71ecae_e92fdacb3103414b890f445b747628a6~mv2.jpg",
    "https://static.wixstatic.com/media/71ecae_b30a19a8966b4ebeabbe20ec2b0e4a61~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/71ecae_b30a19a8966b4ebeabbe20ec2b0e4a61~mv2.jpg",
    "https://static.wixstatic.com/media/71ecae_7f68471bdf01477e922dddf3866a316b~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/71ecae_7f68471bdf01477e922dddf3866a316b~mv2.jpg",
    "https://static.wixstatic.com/media/71ecae_36e0f818fabd4a75bece22f8fb4add95~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/71ecae_36e0f818fabd4a75bece22f8fb4add95~mv2.jpg",
    "https://static.wixstatic.com/media/4fd9a6_e6acbc61f32b4f51b9b327d28df73d9a~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4fd9a6_e6acbc61f32b4f51b9b327d28df73d9a~mv2.jpg",
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
        <h1>Cakes</h1>
        <img src={cake} alt="blueberry cake"/>
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
