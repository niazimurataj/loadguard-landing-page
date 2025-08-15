import React from 'react';
import styles from './CtaSection.module.css';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.contentWrapper}>
        {/* EDITED: Title has been updated */}
        <h2 className={styles.title} style={{ fontSize: '2.25rem' }}>
          Prevent Contamination Before It's Too Late
        </h2>
        {/* ADDED: New subtitle */}
        <h3 className={styles.subtitle} style={{ color: 'white' }}>
          Bring your current thermograph contract - LoadGuard is the same price.
        </h3>
        <div className={styles.buttonGroup}>
          <Link to="/pilot" className={styles.primaryButton}>Start Your Pilot</Link>
          <Link to="/contact" className={styles.secondaryButton}>Speak to an Expert</Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;