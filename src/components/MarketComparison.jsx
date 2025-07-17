import React from 'react';
import styles from './MarketComparison.module.css';

// --- Data & Positioning Logic ---

// Manually curated positions for a more natural distribution across all quadrants.
const competitorData = [
  // Top-Right: Specialized Solutions
  { name: 'Delta Trak', x: 82, y: 73 },
  { name: 'Sensitech', x: 76, y: 80 },
  { name: 'CLCircular', x: 68, y: 65 },

  // Top-Left: Broad Platforms
  { name: 'ORBCOMM', x: 35, y: 85 },
  { name: 'Tive', x: 40, y: 78 },
  { name: 'Copeland', x: 28, y: 72 },
  { name: 'Controlant', x: 42, y: 60 },

  // Bottom-Left: Traditional Loggers
  { name: 'Elitech', x: 25, y: 48 },
  { name: 'Monnit', x: 38, y: 42 },
  { name: 'CAS DataLoggers', x: 22, y: 38 },
  { name: 'LogTag Recorders', x: 33, y: 30 },
  { name: 'Tempmate', x: 26, y: 24 },
  { name: 'Peli BioThermal', x: 18, y: 20 },
  { name: 'Cold Chain Technologies', x: 30, y: 15 },
  { name: 'Testo', x: 15, y: 34 },
  { name: 'Libero', x: 40, y: 28 },
  { name: 'Berlinger', x: 12, y: 12 },
  { name: 'NXP Semiconductors', x: 20, y: 8 },
  { name: 'Zest Labs', x: 8, y: 6 },
  
  // Bottom-Right: Niche Innovators
  { name: 'Infratab', x: 60, y: 45 },
  { name: 'Klinge Corporation', x: 70, y: 35 },
  { name: 'Onset', x: 75, y: 25 },
];

// Repositioned LoadGuard to be squarely in the quadrant.
const loadGuard = { name: 'LoadGuard', x: 85, y: 85 };


// --- Component ---
const MarketComparison = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>The Clear Choice for Perishable Logistics</h2>
        <p className={styles.subtitle}>
          While other solutions offer basic logging, LoadGuard provides an unmatched, real-time platform tailored for the complexities of high-value cargo like bananas.
        </p>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.yAxisLabel}>
          Capacity for Real-Time Alerting and Monitoring
        </div>
        
        <div className={styles.chart}>
          <div className={`${styles.quadrantLabel} ${styles.topLeft}`}>Broad Platforms</div>
          <div className={`${styles.quadrantLabel} ${styles.topRight}`}>Specialized Solutions</div>
          <div className={`${styles.quadrantLabel} ${styles.bottomLeft}`}>Traditional Loggers</div>
          <div className={`${styles.quadrantLabel} ${styles.bottomRight}`}>Niche Innovators</div>

          {competitorData.map(c => (
            <div key={c.name} className={styles.dotWrapper} style={{ left: `${c.x}%`, bottom: `${c.y}%` }}>
              <div className={styles.competitorDot}></div>
              <span className={styles.dotLabel}>{c.name}</span>
            </div>
          ))}

          <div className={styles.dotWrapper} style={{ left: `${loadGuard.x}%`, bottom: `${loadGuard.y}%` }}>
            <div className={styles.loadGuardDot}></div>
            <span className={`${styles.dotLabel} ${styles.loadGuardLabel}`}>{loadGuard.name}</span>
          </div>
        </div>

        <div className={styles.xAxisLabel}>
          Relevance to Banana Exporters and Importers
        </div>
      </div>
    </section>
  );
};

export default MarketComparison;