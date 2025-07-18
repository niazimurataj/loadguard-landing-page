import React from 'react';
import styles from './InstallationGuide.module.css';

const InstallationGuide = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Easy Installation</h2>
        <p className={styles.subtitle}>Get up and running in minutes.</p>
      </div>
      <div className={styles.placeholder}>
        <p>Step-by-step installation guide with images or video coming soon.</p>
      </div>
    </section>
  );
};

export default InstallationGuide;
