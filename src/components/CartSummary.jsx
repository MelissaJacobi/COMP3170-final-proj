import styles from './CartSummary.module.css';

export default function CartSummary({ subtotal, total }) {
  const correctAmount = (amount) => {
    return isNaN(amount) ? "0.00" : amount.toFixed(2);
  }

  return (
    <div className={styles.cartSummary}>
      <div className={styles.discountCode}>
        <input type="text" placeholder="Gift or Discount Code" />
        <button className={styles.applyButton}>Apply</button>
      </div>
      <div className={styles.pricing}>
        <div className={styles.priceRow}>
          <span>Subtotal</span>
          <span>CA${correctAmount(subtotal)}</span>
        </div>
        <div className={styles.priceRow}>
          <span>Total</span>
          <span>CA${correctAmount(total)}</span>
        </div>
      </div>
    </div>
  );
}
