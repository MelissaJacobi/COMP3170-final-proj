import CartItem from './CartItem';
import CartSummary from './CartSummary';
import styles from './Cart.module.css';

export default function Cart({ items, subtotal, total }) {
  return (
    <div className={styles.cartContainer}>
      <h2>Your cart</h2>
      <div className={styles.cartItems}>
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <CartSummary subtotal={subtotal} total={total} />
    </div>
  );
}
