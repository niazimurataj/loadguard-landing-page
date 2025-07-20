import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>About LoadGuard</h1>
        <p className={styles.subtitle}>We are a team of experts dedicated to revolutionizing the logistics industry.</p>
      </div>
    </section>
  );
};

export default AboutHero;
