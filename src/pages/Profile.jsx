import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import profilephoto from "../assets/images/profilephoto.jpg";

export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        apartment: "",
        city: "",
        province: "",
        postalCode: "",
    });

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (storedProfile) {
            setProfile(storedProfile);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userProfile", JSON.stringify(profile));
        alert("Profile updated successfully!");
    };

    return (
        <>
            <div className={styles.profileContainer}>
                <img src={profilephoto} alt="Profile" />
                <h1>Hello, {profile.firstName || "User"}!</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.nameInput}>
                        <div>
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleChange}
                                placeholder="Shmidt"
                            />
                        </div>
                        <div>
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleChange}
                                placeholder="Candace"
                            />
                        </div>
                    </div>
                    <div className={styles.emailInput}>
                        <label>E-Mail</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="cshmidt@email.com"
                        />
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                        />
                    </div>
                    <div className={styles.addressInput}>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            placeholder="Street Name"
                        />
                        <input
                            type="text"
                            name="apartment"
                            value={profile.apartment}
                            onChange={handleChange}
                            placeholder="Apartment Bldg. (Optional)"
                        />
                        <div className={styles.cityProvince}>
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={profile.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="province"
                                    value={profile.province}
                                    onChange={handleChange}
                                    placeholder="Province"
                                />
                            </div>
                        </div>
                        <div className={styles.postal}>
                            <input
                                type="text"
                                name="postalCode"
                                value={profile.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                            />
                        </div>
                    </div>
                    <button type="submit" className={styles.saveBtn}>
                        Save Changes
                    </button>
                </form>
            </div>
        </>
    );
}
