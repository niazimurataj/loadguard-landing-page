import React from 'react';
import styles from './OfferingsGrid.module.css';

// EDITED: The 'icon' property now contains new, more representative SVG icons.
const offeringsData = [
  {
    category: 'Core Platform',
    items: [
      { name: 'AI Thermograph', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg> },
      { name: 'BASC/CTPAT Compliance', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
      { name: 'Supply Chain Consulting', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg> },
    ],
  },
  {
    category: 'Risk Management',
    items: [
      { name: 'Reputation Management', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
      { name: 'Insurance Coordination', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
      { name: 'Debanking Strategy', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
    ],
  },
  {
    category: 'Incident Response',
    items: [
      { name: 'Legal & Authority Coordination', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 12v8a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2v-8.5"/><path d="M12 12v8a2 2 0 0 1-2-2h-.5a2 2 0 0 1-2-2v-8.5"/></svg> },
    ],
  },
];

const OfferingsGrid = () => {
  return (
    <section className={styles.gridSection}>
      <div className={styles.intro}>
        <h2 className={styles.sectionTitle}>Take full control of your supply chain</h2>
      </div>
      <div className={styles.gridContainer}>
        {offeringsData.map((category) => (
          <div key={category.category} className={styles.gridColumn}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <ul className={styles.itemList}>
              {category.items.map((item) => (
                <li key={item.name} className={styles.item}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <span className={styles.itemLink}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferingsGrid;