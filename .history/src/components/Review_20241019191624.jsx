import styles from "./Review.module.css"
import profile from "../assets/images/profile.webp";
import { CiStar } from "react-icons/ci";

export default function Review() {
    return (
      <div className={styles.container}>
        <img src={profile} className={styles.profileImg} />
        <div>
            <p className={styles.username}>Profile Username</p>
            <div className={styles.rating}>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
      </div>
    );
  }