import React from 'react';
import styles from './OfferingsSection.module.css';

// Data for the different offerings. This makes the section easy to update.
const offeringsData = [
  {
    title: 'AI Thermograph',
    description: 'Our core hardware detects contamination, proactively alerts you to potential claims, and monitors for phytosanitary issues in real-time.',
    image: 'path/to/your/thermograph-image.png',
    imageAlt: 'LoadGuard AI Thermograph device'
  },
  {
    title: 'BASC/CTPAT Compliance',
    description: 'A professional service for achieving and maintaining BASC/CTPAT certification. This service is offered free of charge to all our hardware customers.',
    image: 'path/to/your/compliance-image.png',
    imageAlt: 'CTPAT and BASC logos'
  },
  {
    title: 'Reputation Management',
    description: 'We shield your business from defamatory claims by monitoring media, issuing content removal requests, and publishing on your behalf to certify your compliance.',
    image: 'path/to/your/reputation-image.png',
    imageAlt: 'Shield protecting a brand logo'
  },
  {
    title: 'Legal & Authority Coordination',
    description: 'In the event of contamination, we coordinate with your legal team, international lawyers, and government authorities to evidence your due diligence and organize your case.',
    image: 'path/to/your/legal-image.png',
    imageAlt: 'Gavel and documents'
  },
  {
    title: 'Insurance',
    description: 'Coordinates with insurance providers to get you insurance in the case of claims, contaminations, and other phytosanitary compliance events.',
    image: 'path/to/your/insurance-image.png',
    imageAlt: 'Insurance policy document'
  },
   {
    title: 'Debanking Strategy',
    description: 'We protect your ability to transact by helping you diversify your banking infrastructure, including setting up secure DeFi payment rails with your supply chain partners.',
    image: 'path/to/your/debanking-image.png',
    imageAlt: 'Network of financial icons'
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
              <a href="#" className={styles.learnMoreLink}>Learn More &rarr;</a>
            </div>
            <div className={styles.imageContainer}>
              {/* You would replace this div with an actual image */}
              <div className={styles.imagePlaceholder}>Image for {offering.title}</div>
              {/* <img src={offering.image} alt={offering.imageAlt} /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;