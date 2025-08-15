import React from 'react';
import styles from './FounderStory.module.css';
import bkCntrImage from '../assets/bk-cntr.png';
import niaziImage from '../assets/niazi.jpg';

const PlayIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const FounderStory = () => {
  return (
    <section className={styles.section}>
      <div className={styles.glassContainer}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Born from Necessity.</h1>
            <p className={styles.storyText}>
              Our family business, Bana King LLC, is a New Jersey–based exotic fruit exporter with deep roots in Ecuador’s banana trade.
            </p>
            <p className={styles.storyText}>
              Criminal contamination at ports, corrupt authorities, and outdated technology left us defenseless. We had no way to prevent incidents and no way to prove our diligence. The tools we needed simply didn't exist.
            </p>
            <p className={styles.storyText}>
              <strong>I founded LoadGuard to build the system we desperately needed.</strong> A trustless, real-time container monitoring platform that empowers exporters to protect their cargo and their reputation.
            </p>
            <div className={styles.founderInfo}>
              <img src={niaziImage} alt="Niazi Murataj" className={styles.founderImage} />
              <div>
                <div className={styles.founderName}>Niazi Murataj</div>
                <div className={styles.founderTitle}>Founder & CEO</div>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <a 
              href="https://youtu.be/IMjgZPUSA8E?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.imageFrame}
            >
              <img src={bkCntrImage} alt="A container of bananas, representing the family business" className={styles.storyImage} />
              <div className={styles.overlay}>
                <div className={styles.pressButton}>
                  <PlayIcon className={styles.playIcon} />
                  <span>Press Coverage</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
