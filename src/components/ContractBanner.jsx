import React from 'react';
import styles from './ContractBanner.module.css';

const ContractBanner = () => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>Same Price, More Intelligence.</h2>
      <p className={styles.subtitle}>
        Bring us your current contract from <strong>Sensitech, Emerson, Controlant, ORBCOMM,</strong> or any other data logger provider. We'll match their price and deliver more comprehensive, real-time alerting.
      </p>
      <button className={styles.ctaButton}>
        <span className={styles.text}>Get a better deal</span>
      </button>
    </div>
  );
};

export default ContractBanner;
