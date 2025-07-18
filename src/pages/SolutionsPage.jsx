import React, { useState } from 'react';
import styles from './SolutionsPage.module.css';
import HardwareSolutionHero from '../components/HardwareSolutionHero.jsx';
import FeatureSolutionSection from '../components/FeatureSolutionSection.jsx';
import ContractBanner from '../components/ContractBanner.jsx';
import MarketComparison from '../components/MarketComparison.jsx';
import CtaSection from '../components/CtaSection.jsx';
import SoftwareSolutionHero from '../components/SoftwareSolutionHero.jsx';
import SoftwareFeatureSection from '../components/SoftwareFeatureSection.jsx';
import SoftwareMarketComparison from '../components/SoftwareMarketComparison.jsx';
import CircularSupplyChain from '../components/CircularSupplyChain.jsx';
import InstallationGuide from '../components/InstallationGuide.jsx';
import FAQ from '../components/FAQ.jsx';  

const SolutionsPage = () => {
  const [activeSolution, setActiveSolution] = useState('hardware');

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
          <SoftwareSolutionHero />
          <SoftwareFeatureSection />
          <SoftwareMarketComparison />
          <CircularSupplyChain />
          <InstallationGuide />
          <FAQ />
          <CtaSection />
        </div>
      )}
    </div>
  );
};

export default SolutionsPage;