import { useState } from "react";
import styles from './Product.module.css';
import placeholder from "../assets/images/placeholder.jpg";
import { PiShoppingCart } from "react-icons/pi";
import Heart from "../assets/images/Heart.svg"; 

export default function Product({ name, price, description, imageUrl }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState("8\"");
  const [quantity, setQuantity] = useState(1);

  const handleContainerClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.popupOverlay)) {
      handleClosePopup();
    }
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSubtractQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Handle adding the product to favorites
  const addToFavorites = () => {
    const product = { name, price, description, imageUrl };
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = [...storedFavorites, product];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <div className={styles.container} onClick={handleContainerClick}>
        <img src={imageUrl || placeholder} className={styles.productImg} alt={name || "Product"} />
        <img 
          src={Heart} 
          className={styles.heartIcon} 
          alt="Heart Icon" 
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the container click
            addToFavorites();
          }}
        />
        <p className={styles.productName}>{name || "Product Name"}</p>
        <div className={styles.infoAndCart}>
          <p>${price || "0.00"}</p>
          <PiShoppingCart className={styles.icon} />
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay} onClick={handleOverlayClick}>
          <div className={styles.popup}>
            <p className={styles.popupProductName}>{name || "Product Name"}</p>
            <img src={imageUrl || placeholder} className={styles.popupImg} alt={name || "Product"} />
            <p className={styles.popupDescription}>{description || "Product details and description go here."}</p>
            <div className={styles.menuAndPrice}>
              <select
                id="sizeSelect"
                value={selectedSize}
                onChange={handleSizeChange}
                className={styles.sizeSelect}
              >
                <option value="8">8"</option>
                <option value="12">12"</option>
                <option value="16">16"</option>
              </select>
              <p className={styles.popupPrice}>${price || "0.00"}</p>
            </div>
            <div className={styles.quantityAndAddBtn}>
              <div className={styles.quantity}>
                <button className={styles.subtractBtn} onClick={handleSubtractQuantity}>
                  &#8722;
                </button>
                <p>{quantity}</p>
                <button className={styles.addBtn} onClick={handleAddQuantity}>
                  &#43;
                </button>
              </div>
              <button className={styles.addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
