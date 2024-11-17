import { useCart } from "./CartInfo";
import styles from "./OrderTotal.module.css";
import { Link } from 'react-router-dom';

export default function OrderTotal() {
    const { subtotal } = useCart();

    const taxRate = 0.12;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;

    const correctAmount = (amount) => {
        return isNaN(amount) ? '0.00' : amount.toFixed(2);
    };

    return (
        <div className={styles.orderTotalContainer}>
            <div className={styles.pricing}>
            <div className={styles.line}></div>
                <div className={styles.subtotal}>
                    <span>Subtotal: </span>
                    <span>CA${correctAmount(subtotal)}</span>
                </div>
                <div className={styles.lineThin}></div>
                <div className={styles.tax}>
                    <span>Tax: </span>
                    <span>CA${correctAmount(taxAmount)}</span>
                </div>
                <div className={styles.lineThin}></div>
                <div className={styles.grandTotal}>
                    <span>Total: </span>
                    <span>CA${correctAmount(total)}</span>
                </div>
                <div className={styles.btns}>
                    <Link to="/">
                        <button className={styles.backBtn}>Back to Shopping</button>
                    </Link>
                    <Link to="/OrderPickUp">
                    <button className={styles.checkoutBtn}>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
