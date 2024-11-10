import { useState } from "react";
import styles from './Product.module.css';
import { PiShoppingCart } from "react-icons/pi";

export default function Product({ data }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleContainerClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div>
      <div className={styles.container} onClick={handleContainerClick}>
        <img src={data.imageUrl} className={styles.productImg} alt="Product" />
        <p className={styles.productName}>{data.description}</p>
        <div className={styles.infoAndCart}>
          <p>${data.price}</p>
          <PiShoppingCart className={styles.icon} />
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
          <div className={styles.popup}>
            <p className={styles.popupProductName}>{data.description}</p>
            <img src={data.imageUrl} className={styles.popupImg} alt="Product" />
            <p className={styles.popupDescription}>{data.description}</p>
            <p className={styles.popupPrice}>${data.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
