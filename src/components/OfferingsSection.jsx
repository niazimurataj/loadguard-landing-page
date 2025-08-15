import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OfferingsSection.module.css';

import thermographImage from '../assets/thermograph-image.png';
import reputationImage from '../assets/agentic_icon.png';

const offeringsData = [
  {
    title: 'AI Thermograph',
    description: 'Our core hardware detects contamination, proactively alerts you to potential claims, and monitors for phytosanitary issues in real-time.',
    image: thermographImage,
    imageAlt: 'LoadGuard AI Thermograph device',
    linkTo: "/solutions?tab=hardware"
  },
  {
    title: 'Agentic Software Services',
    description: 'Our suite of software services, including reputation management, legal coordination, and debanking strategy, to protect your business.',
    image: reputationImage,
    imageAlt: 'Software services icon',
    linkTo: "/solutions?tab=software"
  }
];

const OfferingsSection = () => {
  return (
    <section className={styles.offeringsSection}>
      <div className={styles.intro}>
        <h2 className={styles.sectionTitle}>A Holistic Approach to Supply Chain Security</h2>
        <p className={styles.sectionSubtitle}>We offer more than just hardware. Our suite of services is designed to protect your cargo, your reputation, and your bottom line.</p>
      </div>
      <div className={styles.offeringsList}>
        {offeringsData.map((offering, index) => (
          <div key={index} className={styles.offeringItem}>
            <div className={styles.textContainer}>
              <h3 className={styles.offeringTitle}>{offering.title}</h3>
              <p className={styles.offeringDescription}>{offering.description}</p>
              <Link to={offering.linkTo} className={styles.learnMoreLink}>Learn More &rarr;</Link>
            </div>
            <div className={styles.imageContainer}>
              <img src={offering.image} alt={offering.imageAlt} className={styles.offeringImage} /> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;