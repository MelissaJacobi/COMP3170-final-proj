import styles from "./Profile.module.css";
import placeholder from "../assets/images/placeholder.jpg";

export default function Profile() {
    return (
        <>
            <div className={styles.profileContainer}>
                <img src={placeholder}/>
                <h1>Hello, Guest!</h1>
                <form>
                    <div className={styles.nameInput}>
                        <div>
                            <label>Last Name</label>
                            <input type="text" placeholder="Doe"/>
                        </div>
                        <div>
                            <label>First Name</label>
                            <input type="text" placeholder="Jane"/>
                        </div>
                    </div>
                    <div className={styles.emailInput}>
                        <label>E-Mail</label>
                        <input type="text" placeholder="example@email.com"/>
                        <label>Phone Number</label>
                        <input type="text" placeholder="(123) 456-7890"/>
                    </div>
                    <div className={styles.addressInput}>
                        <label>Address</label>
                        <input type="text" placeholder="Street Name"/>
                        <input type="text" placeholder="Apartment Bldg. (Optional)"/>
                        <div className={styles.cityProvince}>
                            <div>
                                <input type="text" placeholder="City"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Province"/>
                            </div>
                         </div>
                         <div className={styles.postal}>
                            <input type="text" placeholder="Postal Code"/>
                        </div>
                    </div>
                    <button className={styles.saveBtn}>Save Changes</button>
                </form>
            </div>
        </>
    )
}