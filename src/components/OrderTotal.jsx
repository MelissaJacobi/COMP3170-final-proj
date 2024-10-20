import styles from "./OrderTotal.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrderTotal({ products }) {

    const [subtotal, setSubtotal] = useState(0);
    const [salesTax, setSalesTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const total = products.reduce((sum, product) => sum + product.amount, 0);
        setSubtotal(total);

        const tax = total * 0.12;
        setSalesTax(tax);

 
        setGrandTotal(total + tax);
    }, [products]);

    return (
        <>
            <div className={styles.orderTotalContainer}>
                <div className={styles.line}></div>
                <div className={styles.subtotal}>
                    <p>Subtotal: </p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className={styles.lineThin}></div>
                <div className={styles.tax}>
                    <p>Sales Tax: </p>
                    <p>${salesTax.toFixed(2)}</p>
                </div>
                <div className={styles.lineThin}></div>
                <div className={styles.grandTotal}>
                    <p>Grand Total: </p>
                    <p>${grandTotal.toFixed(2)}</p>
                </div>
                <div className={styles.btns}>
                    <Link to="/">
                        <button className={styles.backBtn}>Back to Shopping</button>
                    </Link>
                    <Link to="/OrderDelivery">
                    <button className={styles.checkoutBtn}>Checkout</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
