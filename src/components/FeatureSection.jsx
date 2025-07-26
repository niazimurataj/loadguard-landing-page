import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeatureSection.module.css';

// We'll define our features as an array of objects.
// This makes it easy to add, remove, or change features later.
const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    title: 'Real-Time Monitoring',
    description: 'Temperature, humidity, light, and GPS data like a traditional thermograph, but with added security data. Delivered to your phone in real-time.',
    blogSlug: 'power-of-real-time-monitoring'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'AI-Powered Alerts',
    description: 'Our system proactively alerts you to potential contamination or security breaches, giving you the time you need to take action and prevent loss.',
    blogSlug: 'ai-powered-alerts'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
    ),
    title: 'Traceability Chain',
    description: 'Generate immutable, time-stamped reports to prove container integrity, simplify claims processing, and meet regulatory compliance.',
    blogSlug: 'unbreakable-chain-traceability'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
    ),
    title: 'Partner Integration',
    description: 'Seamlessly share data with customs officials, insurance providers, and logistics partners to streamline your entire supply chain.',
    blogSlug: 'seamless-integration'
  }
];

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Secure from Latin America to Europe</h2>
      <div className={styles.featuresGrid}>
        {/* We map over the data array to render each feature card */}
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;