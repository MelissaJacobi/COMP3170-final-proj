import styles from "./Reviews.module.css"
import Review from "../components/Review";
import reviews from "../assets/images/reviews.jpg";
import { useState } from "react";

export default function Reviews({add, toggleEdit}) {

    const [reviewContent, setReviewContent] = useState({
        name: '',
        email: '',
        rating: '5',
        comment: ''
    });

    const [review, setReview] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();

        setReview([...review, reviewContent]);

        add(review);

        toggleEdit();

        setReviewContent({
            name: '',
            email: '',
            rating: '5',
            comment: ''
        });
    }

    function handleInputChange(e){
        const { name, value } = e.target;
        setReviewContent(inputData => ({
            ...inputData,
            [name]: value
        }));
    }


    return (
      <div className={styles.container}>
        <div className={styles.banner}>
            <img src={reviews} alt="baking"/>
            <h1>Reviews</h1>
        </div>
        <div className={styles.reviewFormContainer}>
            <form action="#" method="POST" className={styles.reviewForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" value={reviewContent.name} onChange={handleInputChange} required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" value={reviewContent.email} onChange={handleInputChange} required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="rating">Rating</label>
                    <select id="rating" name="rating" value={reviewContent.rating} onChange={handleInputChange} required>
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Average</option>
                    <option value="2">2 - Poor</option>
                    <option value="1">1 - Terrible</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="comment">Your Review</label>
                    <textarea id="comment" name="comment" rows="5" value={reviewContent.comment} onChange={handleInputChange} required></textarea>
                </div>

                <button type="submit">Submit Review</button>
            </form>
      </div>
        <div className={styles.reviews}>
            {review.map((review, i) => (
                <Review key={i} name={review.name} rating={review.rating} comment={review.comment}/>
            ))}
        </div>
        
      </div>
    );
  }