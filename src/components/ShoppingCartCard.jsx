import styles from "./ShoppingCartCard.module.css";
import { useState } from "react";

export default function ShoppingCartCard({ product, updateQuantity }) {
    const [quantity, setQuantity] = useState(product.quantity);

    function handleAddQuantity() {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(product.id, newQuantity);
    }

    function handleSubtractQuantity() {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        updateQuantity(product.id, newQuantity); // This will handle removal if newQuantity is 0
    }

    if (quantity === 0) {
        // Optionally, render nothing if the product is removed
        return null;
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgName}>
                <img src={product.image} alt={product.alttext} />
                <h2>{product.name}</h2>
            </div>
            <p>${product.price.toFixed(2)}</p>
            <div className={styles.quantity}>
                <button className={styles.addBtn} onClick={handleSubtractQuantity}>&#8722;</button>
                <p>{quantity}</p>
                <button className={styles.subtractBtn} onClick={handleAddQuantity}>&#43;</button>
            </div>
            <p className={styles.amount}>${(product.price * quantity).toFixed(2)}</p>
        </div>
    );
}
