import React from 'react';
import styles from './CircularSupplyChain.module.css';
import circularChainImage from '../assets/circular_chain.png';

const CircularSupplyChain = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Our Circular Supply Chain</h2>
          <p className={styles.subtitle}>A sustainable approach to real-time monitoring.</p>
          <p className={styles.blurb}>
            We are committed to sustainability. At the end of their lifecycle, our devices are returned, refurbished, and redeployed, minimizing e-waste and supporting a circular economy for a greener supply chain.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={circularChainImage}
            alt="A diagram showing the circular lifecycle of LoadGuard devices, from deployment to recycling and refurbishment."
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CircularSupplyChain;
