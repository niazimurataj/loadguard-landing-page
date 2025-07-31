import React from 'react';
// 1. Import the CSS module file.
// The 'styles' object will contain all the class names from your CSS file.
import styles from './HeroSection.module.css';

// You can import assets like images directly.
// import heroImage from '../assets/loadguard-hero-section.png';
// import reeferImage from '../assets/reefer-image.png';

const HeroSection = () => {
  return (
    // 2. Use the imported 'styles' object to apply classes.
    // Instead of className="hero-section", you use className={styles.heroSection}.
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>

        {/*
        // To create a scroll-driven animation with a sprite file in React (JSX):
        // 1. Place your sprite image (a single image containing all animation frames) in your assets.
        // 2. Create a container div with a fixed size (matching a single frame of the sprite).
        // 3. Use inline styles or a CSS class to set the background image to your sprite file.
        // 4. As the user scrolls, listen to the scroll event (e.g., with a useEffect and window.addEventListener).
        // 5. Calculate the scroll position and determine which frame to show.
        // 6. Update the backgroundPosition style of the container to show the correct frame from the sprite.
        // 7. For performance, throttle or debounce the scroll handler.
        // Example: 
        // <div style={{ width: frameWidth, height: frameHeight, backgroundImage: `url(sprite.png)`, backgroundPosition: `-${currentFrame * frameWidth}px 0` }} />
      */}

      <div className={styles.heroImage}>
        <img src={heroImage} alt="Hero Image" />
      </div>

        {/* Left side: Text content */}
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            A Thermograph that Prevents Contamination with Real-Time AI
          </h1>
          <p className={styles.heroDescription}>
            LoadGuard is a platform that alerts you when your reefers are in claim condition or are contaminated, Get the data you need to avoid paying for claims you're not responsible for and protect your business from contamination penalties.
          </p>
          <button className={styles.ctaButton}>
            Request a Pilot
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;