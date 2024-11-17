import styles from "./OrderTotal.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrderTotal({ products }) {

    const [subtotal, setSubtotal] = useState(0);
    const [salesTax, setSalesTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        if (Array.isArray(products) && products.length > 0) {
            const total = products.reduce((sum, product) => sum + Number(product.amount || 0), 0);
            setSubtotal(total);

            const tax = total * 0.12;
            setSalesTax(tax)

            setGrandTotal(total + tax);
        } else {
            setSubtotal(0);
            setSalesTax(0);
            setGrandTotal(0);
        }
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
                    <Link to="/OrderPickUp">
                    <button className={styles.checkoutBtn}>Checkout</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
