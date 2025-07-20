import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Contact Information</h2>
      <div className={styles.infoItem}>
        <h3>Address</h3>
        <p>123 Main Street, Anytown, USA 12345</p>
      </div>
      <div className={styles.infoItem}>
        <h3>Email</h3>
        <p>contact@loadguard.com</p>
      </div>
      <div className={styles.infoItem}>
        <h3>Phone</h3>
        <p>(123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactInfo;
