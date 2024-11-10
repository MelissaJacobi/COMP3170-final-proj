import { useState } from "react";
import styles from './Product.module.css';
import placeholder from "../assets/images/placeholder.jpg";
import { PiShoppingCart } from "react-icons/pi";
import Heart from "../assets/images/Heart.svg"; 

export default function Product( {product} ) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState("8\""); // Default to 8"

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

  return (
    <div>
      <div className={styles.container} onClick={handleContainerClick}>
        <img src={placeholder} className={styles.productImg} alt="Product" />
        <img src={Heart} className={styles.heartIcon} alt="Heart Icon" />
        <p className={styles.productName}>Product Name</p>
        <div className={styles.infoAndCart}>
          <p>$0.00</p>
          <PiShoppingCart className={styles.icon} />
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay} onClick={handleOverlayClick}>
          <div className={styles.popup}>
            <p className={styles.popupProductName}>Product Name</p>
            <img src={placeholder} className={styles.popupImg} alt="Product" />
            <p className={styles.popupPrice}>$0.00</p>
            <p className={styles.popupDescription}>Product details and description go here.</p>
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
              <p className={styles.popupPrice}>$0.00</p>
            </div>
            <div className={styles.quantity}>
              <button className={styles.addBtn}>&#8722;</button>
              <p>{product.quantity}</p>
              <button className={styles.subtractBtn}>&#43;</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
