import React from 'react';
import styles from './OfferingsGrid.module.css';

// I've taken your list of services and grouped them into logical categories
// to match the structure of the Flexport example.
const offeringsData = [
  {
    category: 'Core Platform',
    items: [
      { name: 'AI Thermograph', icon: '🤖' },
      { name: 'BASC/CTPAT Compliance', icon: '🛡️' },
      { name: 'Supply Chain Consulting', icon: '📈' },
    ],
  },
  {
    category: 'Risk Management',
    items: [
      { name: 'Reputation Management', icon: '📰' },
      { name: 'Insurance Coordination', icon: '📄' },
      { name: 'Debanking Strategy', icon: '🏦' },
    ],
  },
  {
    category: 'Incident Response',
    items: [
      { name: 'Legal & Authority Coordination', icon: '⚖️' },
      // You can add more items here
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
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <a href="#" className={styles.itemLink}>{item.name}</a>
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