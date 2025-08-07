import React from 'react';
// 1. Import the CSS module file.
// The 'styles' object will contain all the class names from your CSS file.
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

// You can import assets like images directly.
// import heroImage from '../assets/loadguard-hero-section.png';
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
            A Thermograph that Prevents Contamination with Real-Time AI
          </h1>
          <p className={styles.heroDescription}>
            LoadGuard is a platform that alerts you when your reefers are in claim condition or are contaminated, Get the data you need to avoid paying for claims you're not responsible for and protect your business from contamination penalties.
          </p>
          <Link to="/pilot" className={styles.ctaButton}>
            Request a Pilot
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;