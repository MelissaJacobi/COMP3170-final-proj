import CartItem from './CartItem';
import CartSummary from './CartSummary';
import styles from './Cart.module.css';
import { useState } from 'react';

export default function Cart({ items }) {
  const [cartItems, setCartItems] = useState(items);

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems(previousCartItems => previousCartItems.map(item => item.id === id ? {
        ...item,
        quantity: newQuantity,
        amount: item.price * newQuantity
      } : item
    ))
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Your cart</h2>
      <div className={styles.cartItems}>
        {items.map((item, index) => (
          <CartItem key={index} item={item} updateItemQuantity={updateItemQuantity}/>
        ))}
      </div>
      <CartSummary />
    </div>
  );
}
