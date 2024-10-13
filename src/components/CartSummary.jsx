import styles from './CartSummary.module.css';

export default function CartSummary({ subtotal, total }) {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.discountCode}>
        <input type="text" placeholder="Gift or Discount Code" />
        <button className={styles.applyButton}>Apply</button>
      </div>
      <div className={styles.pricing}>
        <div className={styles.priceRow}>
          <span>Subtotal</span>
          <span>CA${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.priceRow}>
          <span>Total</span>
          <span>CA${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}