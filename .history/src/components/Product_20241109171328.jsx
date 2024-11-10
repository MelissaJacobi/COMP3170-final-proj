import { useState } from "react";
import styles from './Product.module.css';
import placeholder from "../assets/images/placeholder.jpg";
import { PiShoppingCart } from "react-icons/pi";
import Heart from "../assets/images/Heart.svg"; 

export default function Product() {
  const [showPopup, setShowPopup] = useState(false);

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
          </div>
        </div>
      )}
    </div>
  );
}
