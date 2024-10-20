import styles from "./Review.module.css"
import profile from "../assets/images/profile.webp";

export default function Review() {
    return (
      <div className={styles.container}>
        <img src={profile} className={styles.productImg} />
      </div>
    );
  }