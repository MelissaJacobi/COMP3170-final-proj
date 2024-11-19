import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import styles from "./Cart.module.css";

export default function Cart({ items }) {
  const [cartItems, setCartItems] = useState(items);

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.12;
  const total = subtotal + subtotal * taxRate;

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
      <CartSummary subtotal={subtotal} total={total} />
    </div>
  );
}
