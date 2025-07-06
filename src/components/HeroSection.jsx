import React from 'react';
// 1. Import the CSS module file.
// The 'styles' object will contain all the class names from your CSS file.
import styles from './HeroSection.module.css';

// You can import assets like images directly.
import heroImage from '../assets/loadguard-hero-section.png';
// import reeferImage from '../assets/reefer-image.png';

const HeroSection = () => {
  return (
    // 2. Use the imported 'styles' object to apply classes.
    // Instead of className="hero-section", you use className={styles.heroSection}.
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        
        {/* Left side: Text content */}
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            The Anti-Contamination Thermograph with Real-Time AI
          </h1>
          <p className={styles.heroDescription}>
            LoadGuard is a platform that alerts you when your reefers are in claim condition or are contaminated, giving you the data you need to protect your cargo and protect your bottom line from compliance penalties.
          </p>
          <button className={styles.ctaButton}>
            Prevent a Contamination
          </button>
        </div>

        {/* Right side: Visuals/Images */}
        <div className={styles.heroImages}>
            <img 
            src={heroImage} 
            alt="LoadGuard Anti-Contamination Thermograph" 
            className={styles.imagePlaceholder}
            />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;