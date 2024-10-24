import styles from "./ShoppingCartCard.module.css";

export default function ShoppingCartCard( {product} ) {

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.imgName}>
                    <img src={product.image} alt={product.alttext}/>
                    <h2>{product.name}</h2>
                </div>
                <p>{product.price}</p>
                <div className={styles.quantity}>
                    <button className={styles.addBtn}>&#8722;</button>
                    <p>{product.quantity}</p>
                    <button className={styles.subtractBtn}>&#43;</button>
                </div>
                <p className={styles.amount}>{product.amount}</p>
            </div>
        </>
    )
}