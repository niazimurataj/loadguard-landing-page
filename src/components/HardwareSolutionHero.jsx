import React from 'react';
import styles from './HardwareSolutionHero.module.css';
import explodedImage from '../assets/exploded.png'; // Assuming your image is named exploded.png

const HardwareSolutionHero = () => {
    return (
        // The main section now has a dark, full-width background
        <section className={styles.solutionsHero}>
        <div className={styles.contentWrapper}>
            
            {/* Left Column: Exploded View Image */}
            <div className={styles.imageContainer}>
            <img
                src={explodedImage}
                alt="Exploded view of the LoadGuard device"
                className={styles.explodedImage}
            />
            </div>

            {/* Right Column: Text Content */}
            <div className={styles.textContainer}>
            <h1 className={styles.title}>
                Our Solutions Help You Keep Your Margin
            </h1>
            <p className={styles.description}>
                Discover how LoadGuard's advanced thermograph and real-time AI monitoring prevent contamination and reduce claims.
            </p>
            <button className={styles.ctaButton}>
                Request a Demo
            </button>
            </div>

        </div>
        </section>
    );
}

export default HardwareSolutionHero;