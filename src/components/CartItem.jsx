import React, { useState } from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ item, updateItemQuantity, removeItem }) {
  const [showOverlay, setShowOverlay] = useState(false); 
  const [customRequest, setCustomRequest] = useState(item.customRequest || "");

  const quantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateItemQuantity(item.id, newQuantity);
    }
  };

  const saveCustomRequest = () => {
    item.customRequest = customRequest; 
    setShowOverlay(false);
  };

  return (
    <>
      <div className={styles.cartItem}>
        <img src={item.image} alt={item.name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>{item.name}</h3>
          <button onClick={() => setShowOverlay(true)} className={styles.editButton}>
            Edit Details
          </button>
        </div>
        <div className={styles.productPrice}>
          <p>CA${item.price.toFixed(2)}</p>
          <div className={styles.quantityControl}>
            <span>Qty</span>
            <input
              type="number"
              value={item.quantity}
              onChange={quantityChange}
            />
          </div>
          <button
            onClick={() => removeItem(item.id)} 
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      </div>

      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h2>Edit Custom Request</h2>
            <textarea
              value={customRequest}
              onChange={(e) => setCustomRequest(e.target.value)}
              placeholder="Add any custom requests here..."
              className={styles.customRequestInput}
            />
            <div className={styles.overlayActions}>
              <button onClick={saveCustomRequest} className={styles.saveButton}>
                Save
              </button>
              <button onClick={() => setShowOverlay(false)} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
