import styles from  './PickUpInformation.module.css'

export default function PickUpInformation() {
  return (
    <div className={styles.formContainer}>
      <h2>Pick-up Information</h2>
      <form>
        <input type="email" placeholder="Email" required/>
        <input type="tel" placeholder="Phone Number" required/>
        <div className={styles.inputRow}>
            <input type="text" placeholder="First Name" required/>
            <input type="text" placeholder="Last Name" required/>
        </div>
        <input type="text" placeholder="Food Allergies/Food Restrictions (optional)"/>
        <div className={styles.inputRow}>
            <select required>
                <option value="" disabled selected>Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <select required>
                <option value="" disabled selected>Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <input type="text" placeholder="Pick-up Date"/>
        </div>
        
        <div className={styles.inputRow}>
            <select required>
                <option value="" disabled selected>Hour</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            
            <select required>
                <option value="" disabled selected>Minute</option>
                <option value="00">00</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
            </select>
            <input type="text" placeholder="Pick-up Time"/>
        </div>
        
        <div className={styles.checkboxRow}>
            <input className={styles.checkboxInput} type="checkbox" id="save-info"/>
            <label className={styles.checkboxLabel} for="save-info">Save contact information</label>
        </div>
        
        <button type="submit">Continue to payment</button>
      </form>
    </div>
  )
}