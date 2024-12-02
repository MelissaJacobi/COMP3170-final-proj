import styles from "./ShoppingCart.module.css";
import { useCart } from "../components/CartInfo";
import ShoppingCartCard from "../components/ShoppingCartCard";
import OrderTotal from "../components/OrderTotal";

export default function ShoppingCart() {
    const { products, updateProductQuantity } = useCart();

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
                    {products.map(product => (
                        <ShoppingCartCard 
                            key={product.id} 
                            product={product} 
                            updateQuantity={updateProductQuantity} 
                        />
                    ))}
                </div>
                <div>
                    <OrderTotal products={products} />
                </div>
            </div>
        </>
    );
}
