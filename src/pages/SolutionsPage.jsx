import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SolutionsPage.module.css';
import offeringsStyles from '../components/OfferingsSection.module.css';
import HardwareSolutionHero from '../components/HardwareSolutionHero.jsx';
import FeatureSolutionSection from '../components/FeatureSolutionSection.jsx';
import ContractBanner from '../components/ContractBanner.jsx';
import MarketComparison from '../components/MarketComparison.jsx';
import CtaSection from '../components/CtaSection.jsx';
import CircularSupplyChain from '../components/CircularSupplyChain.jsx';
import InstallationGuide from '../components/InstallationGuide.jsx';
import FAQ from '../components/FAQ.jsx';

import complianceImage from '../assets/compliance-image.png';
import reputationImage from '../assets/reputation-image.png';
import legalImage from '../assets/legal-image.png';
import insuranceImage from '../assets/insurance-image.png';
import debankingImage from '../assets/debanking-image.png';

const softwareOfferingsData = [
  {
    title: 'BASC/CTPAT Compliance',
    description: 'A professional service for achieving and maintaining BASC/CTPAT certification. This service is offered free of charge to all our hardware customers.',
    image: complianceImage,
    imageAlt: 'CTPAT and BASC logos',
  },
  {
    title: 'Reputation Management',
    description: 'We shield your business from defamatory claims by monitoring media, issuing content removal requests, and publishing on your behalf to certify your compliance.',
    image: reputationImage,
    imageAlt: 'Shield protecting a brand logo',
  },
  {
    title: 'Legal & Authority Coordination',
    description: 'In the event of contamination, we coordinate with your legal team, international lawyers, and government authorities to evidence your due diligence and organize your case.',
    image: legalImage,
    imageAlt: 'Gavel and documents',
  },
  {
    title: 'Insurance',
    description: 'Coordinates with insurance providers to get you insurance in the case of claims, contaminations, and other phytosanitary compliance events.',
    image: insuranceImage,
    imageAlt: 'Insurance policy document',
  },
   {
    title: 'Debanking Strategy',
    description: 'We protect your ability to transact by helping you diversify your banking infrastructure, including setting up secure DeFi payment rails with your supply chain partners.',
    image: debankingImage,
    imageAlt: 'Network of financial icons',
  }
];

const SolutionsPage = () => {
  const location = useLocation();
  const [activeSolution, setActiveSolution] = useState(
    location.state?.activeTab || 'hardware'
  );

  return (
    <div className="gradient-background">
      <h1>Supply Chain Technology Tailored for Banana Exporters and Importers</h1>
      
      <div style={{ textAlign: 'center' }}>
        <div className={styles.toggleWrapper}>
          <button 
            className={`${styles.toggleButton} ${activeSolution === 'hardware' ? styles.active : ''}`}
            onClick={() => setActiveSolution('hardware')}
          >
            Hardware
          </button>
          <button 
            className={`${styles.toggleButton} ${activeSolution === 'software' ? styles.active : ''}`}
            onClick={() => setActiveSolution('software')}
          >
            Software
          </button>
        </div>
      </div>

      <div className={styles.separator} style={{ margin: '0px 0px 0px 0px' }}></div>

      {activeSolution === 'hardware' ? (
        <>
          <HardwareSolutionHero />
          <FeatureSolutionSection />
          <ContractBanner />
          <MarketComparison />
          <CircularSupplyChain />
          <InstallationGuide />
          <FAQ />
          <CtaSection />
        </>
      ) : (
        <div>
          <h2 className={styles.floatingHeader}>Features Coming Soon.</h2>
          <div className={offeringsStyles.offeringsList}>
            {softwareOfferingsData.map((offering, index) => (
              <div key={index} className={`${offeringsStyles.offeringItem} ${styles.softwareOfferingCard}`}>
                <div className={offeringsStyles.textContainer}>
                  <h3 className={offeringsStyles.offeringTitle}>{offering.title}</h3>
                  <p className={offeringsStyles.offeringDescription}>{offering.description}</p>
                </div>
                <div className={offeringsStyles.imageContainer}>
                  <img src={offering.image} alt={offering.imageAlt} className={offeringsStyles.offeringImage} /> 
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionsPage;