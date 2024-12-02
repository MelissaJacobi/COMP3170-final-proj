import styles from "./Review.module.css";
import profile from "../assets/images/profile.webp";
import { FaStar } from "react-icons/fa";

export default function Review({ name, rating, comment }) {
  const stars = Array(5).fill(0); // Create an array with 5 placeholders

  return (
    <div className={styles.container}>
      <img src={profile} className={styles.profileImg} alt="Profile" />
      <div>
        <p className={styles.username}>{name}</p>
        <div className={styles.rating}>
          {stars.map((_, index) => (
            <FaStar
              key={index}
              color={index < rating ? "gold" : "lightgray"} // Highlight stars up to the rating
            />
          ))}
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
}
