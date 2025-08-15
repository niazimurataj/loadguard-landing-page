import React from 'react';
import styles from './CircularSupplyChain.module.css';
import circularChainImage from '../assets/circular_chain.png';

const CircularSupplyChain = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}> Device Cycling 🔁</h2>
          <p className={styles.subtitle}>A sustainable approach to real-time monitoring.</p>
          <p className={styles.blurb}>
            We provide you with the shipping labels to return devices to us once you're done - so that, at the end of their lifecycle, they can be refurbished and redeployed. Minimizing e-waste and supporting a circular economy for a more sustainable supply chain.
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
