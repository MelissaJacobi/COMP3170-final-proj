import styles from "./Review.module.css"
import profile from "../assets/images/profile.webp";
import { CiStar } from "react-icons/ci";

export default function Review() {
    return (
      <div className={styles.container}>
        <img src={profile} className={styles.profileImg} />
        <div>
            <p>Profile Username</p>
            <div className={styles.rating}>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
            </div>
        </div>
      </div>
    );
  }