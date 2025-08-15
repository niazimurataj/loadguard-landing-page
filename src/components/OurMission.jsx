import React from 'react';
import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.text}>
          To restore trust in the global supply chain. We build resilient, transparent, and accessible monitoring technology that gives exporters the power to prove their diligence, protect their assets, and trade with confidence. We're making LoadGuard the global standard for trusted cargo.
        </p>
      </div>
    </section>
  );
};

export default OurMission;