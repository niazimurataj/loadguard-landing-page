import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>Contact Information</h2>
      <div className={styles.infoItem}>
        <h3>Address</h3>
        <p>Loadguard Registered Office, University Street, Seattle, WA 98101</p>
      </div>
      <div className={styles.infoItem}>
        <h3>Email</h3>
        <p>niazi at loadguard dot com</p>
      </div>
      <div className={styles.infoItem}>
        <h3>Phone (Agentic Customer Support)</h3>
        <p>+1 (551) 444 0356</p>
      </div>
    </div>
  );
};

export default ContactInfo;
