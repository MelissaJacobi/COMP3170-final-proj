import React, { useState } from 'react';
import styles from './OrderInformation.module.css';

export default function PickUpInformation() {

  return (
    <div className={styles.formContainer}>
      <h2>Delivery Information</h2>
      <form>
        <input type="email" placeholder="Email" required className={styles.email} />
        <input type="tel" placeholder="Phone Number" required className={styles.phone} />
        <div className={styles.inputRow}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="text" placeholder="Address" required className={styles.email} />
        <input type="text" placeholder="Apartment, suite, etc (optional)" className={styles.email} />
        <input type="text" placeholder="City" required className={styles.email} />
        <input type="text" placeholder="Postal Code" required className={styles.email} />

        <div className={styles.checkboxRow}>
          <input className={styles.checkboxInput} type="checkbox" id="save-info" />
          <label className={styles.checkboxLabel} htmlFor="save-info">Save contact information</label>
        </div>

        <button className={styles.button} type="submit">Continue to payment</button>
      </form>
    </div>
  );
}
