// --- File: src/components/TrustedBySection.jsx ---
// This component provides social proof by displaying logos of clients or partners.

import React, { useState } from 'react';
import styles from './TrustedBySection.module.css';

// 1. Import each logo as a module.
// Vite will replace these variables with the correct public path to the image.
// Make sure you have an 'assets' folder inside your 'src' folder with these files.
import doleLogo from '../assets/dole_logo.svg';
import mscLogo from '../assets/msc_logo.svg';
import banakingLogo from '../assets/banaking_logo.png';
import philaportLogo from '../assets/philaport_logo.png';
import iridiumLogo from '../assets/Iridium_Logo.png';
import orbcommLogo from '../assets/Orbcomm_logo.svg';
import dhsLogo from '../assets/DHS_logo.png';
import cbpLogo from '../assets/CBP_logo.png';
import ctpatLogo from '../assets/CTPAT_logo.png';
import bascLogo from '../assets/BASC_logo.png';
import microsoftLogo from '../assets/Microsoft_logo.png';


// 2. Update the data arrays to use the imported logo variables.
const customers = [
  { name: 'Dole', logo: doleLogo },
  { name: 'MSC', logo: mscLogo },
  { name: 'BanaKing', logo: banakingLogo },
  { name: 'PhilaPort', logo: philaportLogo }
];

const techPartners = [
    { name: 'Iridium', logo: iridiumLogo },
    { name: 'Orbcomm', logo: orbcommLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'DHS', logo: dhsLogo },
    { name: 'CBP', logo: cbpLogo },
    { name: 'CTPAT', logo: ctpatLogo },
    { name: 'BASC', logo: bascLogo },
];


const TrustedBySection = () => {
  const [activeList, setActiveList] = useState('customers');

  const currentList = activeList === 'customers' ? customers : techPartners;
  const currentTitle = activeList === 'customers' 
    ? "Trusted by the Latin America's biggest importers and exporters"
    : "Built with leading government and technology partners";

  return (
    <section className={styles.trustedBySection}>
      
      <div className={styles.toggleWrapper}>
        <button 
          className={`${styles.toggleButton} ${activeList === 'customers' ? styles.active : ''}`}
          onClick={() => setActiveList('customers')}
        >
          Our Customers
        </button>
        <button 
          className={`${styles.toggleButton} ${activeList === 'partners' ? styles.active : ''}`}
          onClick={() => setActiveList('partners')}
        >
          Our Partners
        </button>
      </div>

      <h2 className={styles.sectionTitle}>
        {currentTitle}
      </h2>

      <div className={styles.logoGrid}>
        {currentList.map((item) => (
          <div key={item.name} className={styles.logoContainer}>
            {/* 3. Use the imported logo variable in the 'src' attribute. */}
            <img src={item.logo} alt={`${item.name} logo`} className={styles.logoImage} />
          </div>
        ))}
        
      </div>
      <br />
      <br />
      <br />
        <div className={styles.buttonContainer} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button className={styles.secondaryButton}>
                Read their Stories
            </button>
        </div>
      
    </section>
  );
};

export default TrustedBySection;