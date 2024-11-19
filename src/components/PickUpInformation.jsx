import React, { useState } from 'react';
import styles from './PickUpInformation.module.css';

export default function PickUpInformation() {
  const [selectedDate, setSelectedDate] = useState({ month: '', day: '' });
  const [selectedTime, setSelectedTime] = useState({ hour: '', minute: '' });

  const days = Array.from({ length: 31 }, (_, i) => i + 1); 
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const hours = Array.from({ length: 24 }, (_, i) => i); 
  const minutes = Array.from({ length: 60 }, (_, i) => i); 

  const handleDateChange = (field, value) => {
    setSelectedDate((prev) => ({ ...prev, [field]: value }));
  };

  const handleTimeChange = (field, value) => {
    setSelectedTime((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Pick-up Information</h2>
      <form>
        <input type="email" placeholder="Email" required className={styles.email} />
        <input type="tel" placeholder="Phone Number" required className={styles.phone} />
        <div className={styles.inputRow}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="text" placeholder="Food Allergies/Food Restrictions (optional)" />

        <div className={styles.inputRow}>
          <select
            required
            onChange={(e) => handleDateChange('month', e.target.value)}
          >
            <option value="" disabled selected>Month</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          
          <select
            required
            onChange={(e) => handleDateChange('day', e.target.value)}
          >
            <option value="" disabled selected>Day</option>
            {days.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          
          <span className={styles.date}>
            {selectedDate.month && selectedDate.day
              ? `${selectedDate.month}/${selectedDate.day.toString().padStart(2, '0')}`
              : 'Date'}
          </span>
        </div>

        <div className={styles.inputRow}>
          <select
            required
            onChange={(e) => handleTimeChange('hour', e.target.value)}
          >
            <option value="" disabled selected>Hour</option>
            {hours.map((hour) => (
              <option key={hour} value={hour}>{hour.toString().padStart(2, '0')}</option>
            ))}
          </select>

          <select
            required
            onChange={(e) => handleTimeChange('minute', e.target.value)}
          >
            <option value="" disabled selected>Minute</option>
            {minutes.map((minute) => (
              <option key={minute} value={minute}>{minute.toString().padStart(2, '0')}</option>
            ))}
          </select>
          
          <span className={styles.time}>
            {selectedTime.hour !== '' && selectedTime.minute !== ''
              ? `${selectedTime.hour.toString().padStart(2, '0')}:${selectedTime.minute.toString().padStart(2, '0')}`
              : 'Time'}
          </span>
        </div>

        <div className={styles.checkboxRow}>
          <input className={styles.checkboxInput} type="checkbox" id="save-info" />
          <label className={styles.checkboxLabel} htmlFor="save-info">Save contact information</label>
        </div>

        <button className={styles.button} type="submit">Continue to payment</button>
      </form>
    </div>
  );
}
