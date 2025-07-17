import React from 'react';
import styles from './HardwareSolutionHero.module.css';

const SoftwareSolutionHero = () => {
    return (
        <section className={styles.solutionsHero}>
        <div className={styles.contentWrapper}>
            <div className={styles.imageContainer}>
            <div className={styles.placeholderImage}>Software Image Placeholder</div>
            </div>
            <div className={styles.textContainer}>
            <h1 className={styles.title}>
                Software Solution Title Placeholder
            </h1>
            <p className={styles.description}>
                Software solution description placeholder.
            </p>
            <button className={styles.ctaButton}>
                Request a Demo
            </button>
            </div>
        </div>
        </section>
    );
}

export default SoftwareSolutionHero;
