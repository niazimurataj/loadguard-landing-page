import React from 'react';
import styles from './OurTeam.module.css';
import niazi from '../assets/niazi.jpg';
import akshay from '../assets/akshay.png';

const teamMembers = [
  { name: 'Niazi Murataj', role: 'CEO', image: niazi },
  { name: 'Akshay Hanumegowda', role: 'CTO', image: akshay },
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
            <div>
              <img className={styles.placeholderImage} src={member.image} alt={member.name} />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
