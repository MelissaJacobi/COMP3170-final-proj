import styles from "./ShoppingCart.module.css";
import ShoppingCartCard from "../components/ShoppingCartCard";
import OrderTotal from "../components/OrderTotal";
import strawberrycake from "../assets/images/strawberrycake.png";
import yule_log from "../assets/images/yule_log.jpg";
import sourdough from "../assets/images/sourdough.jpeg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useState } from "react";

export default function ShoppingCart() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Yule Log",
            price: 15.00,
            quantity: 1,
            amount: 15.00,
            image: yule_log,
            alttext: "yule log cake"
        },
        {
            id: 2,
            name: "Sourdough",
            price: 8.00,
            quantity: 2,
            amount: 16.00,
            image: sourdough,
            alttext: "sourdough"
        },
        {
            id: 3,
            name: "Strawberry Shortcake 8'",
            price: 48.00,
            quantity: 1,
            amount: 48.00,
            image: strawberrycake,
            alttext: "strawberrycake"
        }
    ])

    function updateProductQuantity(id, newQuantity) {
        setProducts((items) => items.map(product => product.id === id ? {
            ...product, 
            quantity: newQuantity,
            amount: product.price * newQuantity 
            } : product
        ))
    }

    const productList = products.map(product => <ShoppingCartCard key={product.id} product={product} updateQuantity={updateProductQuantity}/>)

    return (
        <>
            <div className={styles.shoppingCartContainer}>
                <div className={styles.titleList}>
                    <ul> 
                        <li>Item</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </ul>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.productCard}>
                    {productList}
                </div>
                <div>
                    <OrderTotal products={products}/>
                </div>
            </div>
        </>
    )
}