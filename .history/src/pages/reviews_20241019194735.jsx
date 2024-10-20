import styles from "./Reviews.module.css";
import profile from "../assets/images/profile.webp";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>Reviews</h1>
      </div>

      {/* Review Form */}
      <div className={styles.reviewFormContainer}>
        <h2>Leave a Review</h2>
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

      {/* List of Reviews */}
      <div className={styles.reviews}>
        <div className={styles.review}>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        <div className={styles.review}>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        {/* Add more review entries if needed */}
      </div>
    </div>
  );
}
