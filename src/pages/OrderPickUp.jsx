import React from 'react';
import PickUpInformation from "../components/PickUpInformation";
import Cart from "../components/Cart";
import OrderButton from "../components/OrderButton";
import styles from './OrderPickUp.module.css';
import placeholder from "../assets/images/placeholder.jpg";
import checkoutBar from "../assets/images/checkoutBar.svg"; 

const sampleItems = [
  { name: 'Yule Log', price: 15.00, quantity: 1, image: placeholder },
  { name: 'Sourdough', price: 8.00, quantity: 1, image: placeholder },
  { name: 'Sugar Cookie', price: 3.00, quantity: 5, image: placeholder },
];

const subtotal = sampleItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const total = subtotal;

export default function OrderPickUp() {
  return (
    <>
      <div className={styles.bar}>
          <img src={checkoutBar} alt="checkout bar" className={styles.checkoutBar}/>
      </div>
      <div className={styles.container}>
        <div className={styles.pickupform}>
          <div className={styles.orderButton}>
            <OrderButton selectedOption="pickup" />
          </div>  
          <PickUpInformation />
        </div>

        <div className={styles.cartsection}>
          <Cart items={sampleItems} subtotal={subtotal} total={total} />
        </div>
      </div>
    </>
  );
}

