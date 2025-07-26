import React from 'react';
import styles from './ReportBanner.module.css';

const ReportBanner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>Read the 2025 State of Banana Container Contaminations, Claims, and Phytosanitary Incidents</p>
      <button className={styles.ctaButton}>
        <span className={styles.text}>Download</span>
      </button>
    </div>
  );
};

export default ReportBanner;
