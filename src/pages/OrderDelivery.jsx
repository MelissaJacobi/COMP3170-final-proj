import React from 'react';
import PickUpInformation from "../components/PickUpInformation";
import Cart from "../components/Cart"; 
import OrderButton from "../components/OrderButton";
import styles from './OrderDelivery.module.css';
import placeholder from "../assets/images/placeholder.jpg";

const sampleItems = [
  { name: 'Yule Log', price: 15.00, quantity: 1, image: placeholder },
  { name: 'Sourdough', price: 8.00, quantity: 1, image: placeholder },
  { name: 'Sugar Cookie', price: 3.00, quantity: 5, image: placeholder },
];

const subtotal = sampleItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const total = subtotal; 

export default function OrderDelivery() {
  return (
    <div className={styles.container}>
      <div className={styles.orderButton}>
        <OrderButton selectedOption="delivery" />
      </div>

      <div className={styles.pickupform}>
        <PickUpInformation />
      </div>

      <div className={styles.cartsection}>
        <Cart items={sampleItems} subtotal={subtotal} total={total} />
      </div>
    </div>
  );
}
