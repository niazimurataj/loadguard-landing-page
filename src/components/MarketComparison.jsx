import React from 'react';
import styles from './MarketComparison.module.css';

// --- Data & Positioning Logic ---

const competitorRanks = [
  { name: 'Sensitech', rank_y: 2, rank_x: 2 },
  { name: 'CLCircular', rank_y: 8, rank_x: 4 },
  { name: 'Delta Trak', rank_y: 1, rank_x: 1 },
  { name: 'ORBCOMM', rank_y: 3, rank_x: 3 },
  { name: 'Tive', rank_y: 4, rank_x: 4 },
  { name: 'Controlant', rank_y: 6, rank_x: 5 },
  { name: 'Elitech', rank_y: 7, rank_x: 6 },
  { name: 'Copeland', rank_y: 5, rank_x: 7 },
  { name: 'Monnit', rank_y: 9, rank_x: 8 },
  { name: 'CAS DataLoggers', rank_y: 10, rank_x: 9 },
  { name: 'Infratab', rank_y: 11, rank_x: 10 },
  { name: 'Klinge Corporation', rank_y: 12, rank_x: 11 },
  { name: 'Onset', rank_y: 13, rank_x: 12 },
  { name: 'LogTag Recorders', rank_y: 14, rank_x: 13 },
  { name: 'Tempmate', rank_y: 15, rank_x: 14 },
  { name: 'Peli BioThermal', rank_y: 16, rank_x: 15 },
  { name: 'Cold Chain Technologies', rank_y: 17, rank_x: 16 },
  { name: 'Testo', rank_y: 18, rank_x: 17 },
  { name: 'Libero', rank_y: 19, rank_x: 18 },
  { name: 'Berlinger', rank_y: 20, rank_x: 19 },
  { name: 'NXP Semiconductors', rank_y: 21, rank_x: 20 },
  { name: 'Zest Labs', rank_y: 22, rank_x: 21 },
];

const mapRankToPosition = (rank, totalItems) => {
    const minPos = 10;
    const maxPos = 90;
    const invertedRank = totalItems + 1 - rank;
    return ((invertedRank - 1) / (totalItems - 1)) * (maxPos - minPos) + minPos;
};

// NEW: Adds a random offset to a value to create "jitter"
// The multiplier (e.g., 8) controls the maximum spread.
const addJitter = (value) => {
    return value + (Math.random() - 0.5) * 8;
};

const totalCompetitors = competitorRanks.length;
const competitorData = competitorRanks.map(c => ({
  name: c.name,
  x: addJitter(mapRankToPosition(c.rank_x, totalCompetitors)),
  y: addJitter(mapRankToPosition(c.rank_y, totalCompetitors)),
}));

const loadGuard = { name: 'LoadGuard', x: 92, y: 98 };

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
          {/* UPDATED: Quadrant Names */}
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