import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import PlantationIntelligenceHero from '../components/PlantationIntelligenceHero.jsx';
import SoftwareFeatureSection from '../components/SoftwareFeatureSection.jsx';

import complianceImage from '../assets/compliance-image.png';
import reputationImage from '../assets/reputation-image.png';
import legalImage from '../assets/legal-image.png';
import insuranceImage from '../assets/insurance-image.png';
import debankingImage from '../assets/debanking-image.png';

const softwareOfferingsData = [
  {
    title: 'BASC/CTPAT Compliance',
    description: 'Use AI to maintain or achieve a BASC/CTPAT certification. This agentic service is offered free of charge to all our hardware customers.',
    image: complianceImage,
    imageAlt: 'CTPAT and BASC logos',
  },
  {
    title: 'Reputation Management',
    description: 'We monitor media, issuing content removal requests, and publishing on your behalf to certify your compliance.',
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const SolutionsPage = () => {
  const location = useLocation();
  const [activeSolution, setActiveSolution] = useState(
    location.state?.activeTab || 'hardware'
  );

  return (
    <div className={`${styles.solutionsPage} gradient-background`}>
      <div style={{ textAlign: 'center' }}>
        <div className={styles.toggleWrapper}>
          <motion.div
            className={styles.activeBg}
            initial={false}
            animate={{ x: activeSolution === 'hardware' ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
          <button 
            className={styles.toggleButton}
            onClick={() => setActiveSolution('hardware')}
          >
            Hardware
          </button>
          <button 
            className={styles.toggleButton}
            onClick={() => setActiveSolution('software')}
          >
            Software
          </button>
        </div>
      </div>
        <h1 className={styles.mainHeader}>Supply Chain Technology Tailored for Banana Exporters and Importers</h1>

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
        <div className={styles.softwareSectionWrapper}>
          <PlantationIntelligenceHero />
          <SoftwareFeatureSection />
          <div className={styles.agenticServicesSection}>
            
            <div className={styles.softwareOfferingsList}>
              {softwareOfferingsData.map((offering, index) => (
                <motion.div 
                  key={index} 
                  className={`${offeringsStyles.offeringItem} ${styles.softwareOfferingCard}`}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className={offeringsStyles.textContainer}>
                    <h3 className={`${offeringsStyles.offeringTitle} ${styles.softwareOfferingTitle}`}>{offering.title}</h3>
                    <p className={`${offeringsStyles.offeringDescription} ${styles.softwareOfferingDescription}`}>{offering.description}</p>
                  </div>
                  <div className={offeringsStyles.imageContainer}>
                    <img src={offering.image} alt={offering.imageAlt} className={offeringsStyles.offeringImage} /> 
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <CtaSection />
        </div>
      )}
    </div>
  );
};

export default SolutionsPage;