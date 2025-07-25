import React from 'react';
import styles from './CompanyTimeline.module.css';

const timelineEvents = [
  { year: '2022', event: 'Company founded with a mission to secure the global supply chain.' },
  { year: '2023', event: 'First prototype of the LoadGuard device developed and tested.' },
  { year: '2024', event: 'Secured seed funding and expanded our engineering team.' },
  { year: '2025', event: 'Launched our first commercial product and onboarded our first customers.' },
];

const CompanyTimeline = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Journey</h2>
      </div>
      <div className={styles.timeline}>
        {timelineEvents.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{item.year}</div>
            <div className={styles.timelineEvent}>{item.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;
