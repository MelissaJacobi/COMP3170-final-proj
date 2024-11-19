import React, { useState, useEffect } from "react";
import PickUpInformation from "../components/OrderInformation";
import Cart from "../components/Cart";
import OrderButton from "../components/OrderButton";
import styles from "./OrderDelivery.module.css";
import checkoutBar from "../assets/images/checkoutBar.svg";
import { useLocation } from "react-router-dom";

export default function OrderDelivery() {
    const location = useLocation();

    const [cartItems, setCartItems] = useState(() => {
        const itemsFromState = location.state?.items;
        if (itemsFromState && itemsFromState.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(itemsFromState)); 
            return itemsFromState;
        }
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : []; 
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.12;
    const total = subtotal + subtotal * taxRate;

    return (
        <>
            <div className={styles.bar}>
                <img src={checkoutBar} alt="checkout bar" className={styles.checkoutBar} />
            </div>
            <div className={styles.container}>
                <div className={styles.pickupform}>
                    <div className={styles.orderButton}>
                        <OrderButton selectedOption="delivery" />
                    </div>
                    <PickUpInformation />
                </div>

                <div className={styles.cartsection}>
                    <Cart items={cartItems} subtotal={subtotal} total={total} />
                </div>
            </div>
        </>
    );
}
