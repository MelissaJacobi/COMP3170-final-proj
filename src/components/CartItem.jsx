import styles from './CartItem.module.css';

export default function CartItem({ item }) {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3>{item.name}</h3>
        <p>Edit Details</p>
      </div>
      <div className={styles.productPrice}>
        <p>CA${item.price.toFixed(2)}</p>
        <div className={styles.quantityControl}>
          <span>Qty</span>
          <input type="number" value={item.quantity} readOnly />
        </div>
        <button className={styles.removeButton}>Remove</button>
      </div>
    </div>
  );
}