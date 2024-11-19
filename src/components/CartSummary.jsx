import React, { useState } from "react";
import styles from "./CartSummary.module.css";

export default function CartSummary({ subtotal, total }) {
  const [discount, setDiscount] = useState(0); 
  const [discountCode, setDiscountCode] = useState("");
  const [codeApplied, setCodeApplied] = useState(false); 

  const correctAmount = (amount) => (isNaN(amount) ? "0.00" : amount.toFixed(2));

  const handleCodeChange = (e) => {
    setDiscountCode(e.target.value); 
  };

  const applyDiscount = () => {
    if (!codeApplied && discountCode.trim()) {
      const discountAmount = subtotal * 0.1; 
      setDiscount(discountAmount);
      setCodeApplied(true); 
    }
  };

  const discountedTotal = total - discount;

  return (
    <div className={styles.cartSummary}>
      <div className={styles.discountCode}>
        <input
          type="text"
          placeholder="Gift or Discount Code"
          value={discountCode} 
          onChange={handleCodeChange} 
          disabled={codeApplied} 
        />
        <button
          className={styles.applyButton}
          onClick={applyDiscount}
          disabled={codeApplied} 
        >
          {codeApplied ? "Applied" : "Apply"}
        </button>
      </div>
      <div className={styles.pricing}>
        <div className={styles.priceRow}>
          <span>Subtotal</span>
          <span>CA${correctAmount(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className={styles.priceRow}>
            <span>Discount (10%)</span>
            <span>-CA${correctAmount(discount)}</span>
          </div>
        )}
        <div className={styles.priceRow}>
          <span>Total</span>
          <span>CA${correctAmount(discountedTotal)}</span>
        </div>
      </div>
    </div>
  );
}
