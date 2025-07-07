import React from 'react';
import styles from './AdversaryUniverseSection.module.css';

// Import your custom graphic for this section
import adversaryImage from '../assets/adversary-universe.png'; // Make sure to replace with the actual image name

const AdversaryUniverseSection = () => {
  return (
    <section className={styles.adversarySection}>
      <div className={styles.contentWrapper}>
        
        {/* Left Column: Text Content */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Know them. Find them. <span className={styles.highlightText}>Stop them.</span>
          </h2>
          <p className={styles.description}>
            Adversaries are operating with unprecedented stealth, from corrupt officials to organized crime. Today's threats require more than just temperature logs. Discover the adversaries targeting your supply chain.
          </p>
          <button className={styles.ctaButton}>
            Explore Adversary Universe
          </button>
        </div>

        {/* Right Column: Image */}
        <div className={styles.imageContainer}>
          <img src={adversaryImage} alt="Supply chain adversaries" />
        </div>

      </div>
    </section>
  );
};

export default AdversaryUniverseSection;