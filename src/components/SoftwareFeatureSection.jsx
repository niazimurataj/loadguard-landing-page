import React from 'react';
import styles from './SoftwareFeatureSection.module.css';

const SoftwareFeatureSection = () => {
  return (
    <section className={styles.softwareFeatureSection}>
      <div className={styles.titleContainer}>
        <div className={styles.sticker}>Coming Soon</div>
        <h2 className={styles.title}>Agentic AI Services</h2>
      </div>
      <p className={styles.subtitle}>
        We're integrating our plantation intelligence with an agentic AI suite to give you a compliance and quality assurance back office—without the overhead.
      </p>
    </section>
  );
};

export default SoftwareFeatureSection;
