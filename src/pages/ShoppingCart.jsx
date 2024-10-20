import styles from "./ShoppingCart.module.css";
import ShoppingCartCard from "../components/ShoppingCartCard";
import OrderTotal from "../components/OrderTotal";

export default function ShoppingCart() {

    const products = [
        {
            id: 1,
            name: "Yule Log",
            price: 15.00,
            quantity: 1,
            amount: 15.00
        },
        {
            id: 2,
            name: "Sourdough",
            price: 8.00,
            quantity: 2,
            amount: 16.00
        },
        {
            id: 3,
            name: "Strawberry Shortcake 8'",
            price: 48.00,
            quantity: 1,
            amount: 48.00
        }
    ]

    const overallPrice = products.map(product => ({
        ...product, amount: product.price * product.quantity
    }));

    const productList = overallPrice.map(product => <ShoppingCartCard key={product.id} product={{...product, amount: `$${product.amount.toFixed(2)}`, price: `$${product.amount.toFixed(2)}`}}/>)

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
                    <OrderTotal products={overallPrice}/>
                </div>
            </div>
        </>
    )
}