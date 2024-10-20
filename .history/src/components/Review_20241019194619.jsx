import styles from "./Review.module.css";
import profile from "../assets/images/profile.webp";
import { FaStar } from "react-icons/fa";

export default function Review() {
  return (
    <div className={styles.container}>
      <div className={styles.reviewContainer}>
        <h1>Leave a Review</h1>
        <form action="#" method="POST" className={styles.reviewForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="rating">Rating</label>
            <select id="rating" name="rating" required>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Terrible</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comments">Your Review</label>
            <textarea id="comments" name="comments" rows="5" required></textarea>
          </div>

          <button type="submit">Submit Review</button>
        </form>
      </div>
      <img src={profile} className={styles.profileImg} alt="Profile" />
      <div>
        <p className={styles.username}>Profile Username</p>
        <div className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}
