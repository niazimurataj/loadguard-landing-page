import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OfferingsSection.module.css';

// 1. Import all your images. This is the correct Vite pattern.
import thermographImage from '../assets/thermograph-image.png';
// Placeholders for other images - create these in your assets folder
import complianceImage from '../assets/compliance-image.png'; 
import reputationImage from '../assets/reputation-image.png'; 
import legalImage from '../assets/legal-image.png';         
import insuranceImage from '../assets/insurance-image.png';   
import debankingImage from '../assets/debanking-image.png';   



// 2. Use the imported variables in your data array.
const offeringsData = [
  {
    title: 'AI Thermograph',
    description: 'Our core hardware detects contamination, proactively alerts you to potential claims, and monitors for phytosanitary issues in real-time.',
    image: thermographImage, // Use the variable, not a string path
    imageAlt: 'LoadGuard AI Thermograph device',
    blogSlug: 'power-of-real-time-monitoring'
  },
  {
    title: 'BASC/CTPAT Compliance',
    description: 'A professional service for achieving and maintaining BASC/CTPAT certification. This service is offered free of charge to all our hardware customers.',
    image: complianceImage,
    imageAlt: 'CTPAT and BASC logos',
    blogSlug: 'navigating-ctpat-and-basc'
  },
  {
    title: 'Reputation Management',
    description: 'We shield your business from defamatory claims by monitoring media, issuing content removal requests, and publishing on your behalf to certify your compliance.',
    image: reputationImage,
    imageAlt: 'Shield protecting a brand logo',
    blogSlug: 'contamination-threat-beyond-spoilage'
  },
  {
    title: 'Legal & Authority Coordination',
    description: 'In the event of contamination, we coordinate with your legal team, international lawyers, and government authorities to evidence your due diligence and organize your case.',
    image: legalImage,
    imageAlt: 'Gavel and documents',
    blogSlug: 'unbreakable-chain-traceability'
  },
  {
    title: 'Insurance',
    description: 'Coordinates with insurance providers to get you insurance in the case of claims, contaminations, and other phytosanitary compliance events.',
    image: insuranceImage,
    imageAlt: 'Insurance policy document',
    blogSlug: 'hidden-costs-of-contamination'
  },
   {
    title: 'Debanking Strategy',
    description: 'We protect your ability to transact by helping you diversify your banking infrastructure, including setting up secure DeFi payment rails with your supply chain partners.',
    image: debankingImage,
    imageAlt: 'Network of financial icons',
    blogSlug: 'mastering-ripening-long-haul'
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
              <Link to={`/blog/${offering.blogSlug}`} className={styles.learnMoreLink}>Learn More &rarr;</Link>
            </div>
            <div className={styles.imageContainer}>
              {/* EDITED: Added the className to the img tag */}
              <img src={offering.image} alt={offering.imageAlt} className={styles.offeringImage} /> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsSection;