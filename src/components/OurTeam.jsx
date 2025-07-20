import React from 'react';
import styles from './OurTeam.module.css';

const teamMembers = [
  { name: 'John Doe', role: 'CEO' },
  { name: 'Jane Smith', role: 'CTO' },
  { name: 'Peter Jones', role: 'Lead Engineer' },
];

const OurTeam = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Team</h2>
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <div className={styles.placeholderImage}></div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
