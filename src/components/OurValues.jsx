import React from 'react';
import styles from './OurValues.module.css';

const values = [
  { title: 'Innovation', description: 'We are driven by a relentless pursuit of technological advancement to solve real-world problems.' },
  { title: 'Integrity', description: 'We operate with unwavering honesty and transparency in all our interactions.' },
  { title: 'Reliability', description: 'Our customers trust us to deliver, and we take that responsibility seriously.' },
  { title: 'Collaboration', description: 'We believe the best solutions are born from teamwork and strong partnerships.' },
];

const OurValues = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Values</h2>
      </div>
      <div className={styles.valuesGrid}>
        {values.map((value, index) => (
          <div key={index} className={styles.valueCard}>
            <h3 className={styles.valueTitle}>{value.title}</h3>
            <p className={styles.valueDescription}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
