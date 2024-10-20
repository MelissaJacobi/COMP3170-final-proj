import styles from "./Review.module.css"
import profile from "../assets/images/profile.webp";
import { FaStar } from "react-icons/fa";

export default function Review() {
    return (
      <div className={styles.container}>
        <img src={profile} className={styles.profileImg} />
        <div>
            <p className={styles.username}>Profile Username</p>
            <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    );
  }