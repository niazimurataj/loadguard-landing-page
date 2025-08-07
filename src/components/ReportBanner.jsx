import React from 'react';
import styles from './ReportBanner.module.css';

const ReportBanner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>Get the 2025 Report on the State of Banana Container Security</p>
      <button className={styles.ctaButton}>
        <span className={styles.text}>Download</span>
      </button>
    </div>
  );
};

export default ReportBanner;
