import styles from "./Reviews.module.css"
import Review from "../components/Review";
import reviews from "../assets/images/reviews.jpg";

export default function Reviews() {
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
            <img src={reviews} alt="baking"/>
            <h1>Reviews</h1>
        </div>
        <div className={styles.reviewFormContainer}>
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
        <div className={styles.reviews}>
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
        
      </div>
    );
  }