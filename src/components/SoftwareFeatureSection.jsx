import React from 'react';
import styles from './FeatureSolutionSection.module.css';

const SoftwareFeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.intro}>
        <h2 className={styles.sectionTitle}>Software Feature Placeholder</h2>
        <p className={styles.sectionSubtitle}>
          Software feature description placeholder.
        </p>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridColumn}>
            <h3 className={styles.categoryTitle}>Software Category 1</h3>
        </div>
        <div className={styles.gridColumn}>
            <h3 className={styles.categoryTitle}>Software Category 2</h3>
        </div>
        <div className={styles.gridColumn}>
            <h3 className={styles.categoryTitle}>Software Category 3</h3>
        </div>
      </div>
    </section>
  );
};

export default SoftwareFeatureSection;
