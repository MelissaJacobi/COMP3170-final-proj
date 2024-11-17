import styles from "./Review.module.css"
import profile from "../assets/images/profile.webp";
import { FaStar } from "react-icons/fa";

export default function Review({ name, rating, comment }) {

  const reviewCount = parseInt(rating, 10);
  const stars = Array(5).fill(0);

    return (
      <div className={styles.container}>
        <img src={profile} className={styles.profileImg} />
        <div>
            <p className={styles.username}>{name}</p>
            <div className={styles.rating}>
                {stars.map((_, index) => (
                  <FaStar key={index}/>
                ))}
            </div>
            <p>{comment}</p>
        </div>
      </div>
    );
  }