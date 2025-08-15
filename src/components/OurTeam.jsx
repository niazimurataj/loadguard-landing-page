import React from 'react';
import styles from './OurTeam.module.css';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import niazi from '../assets/niazi.jpg';
import akshay from '../assets/akshay.png';

const teamMembers = [
  {
    name: 'Niazi Murataj',
    role: 'Co-Founder & CEO',
    image: niazi,
    bio: "The idea for LoadGuard was born from my family's struggle. After our banana export business suffered immense losses from wrongful compliance penalties, I knew there had to be a better way. My experience at McKinsey, Vapi.ai, and Microsoft gave me the conviction that technology could solve this, creating a trustless system for a safer supply chain.",
    tags: ['Ex-McKinsey', 'Ex-Vapi.ai', 'Microsoft']
  },
  {
    name: 'Akshay Hanumegowda',
    role: 'Co-Founder & CTO',
    image: akshay,
    bio: 'I love solving hard, real-world problems. After graduating from NYU and working with the NSF I-Corps, I was searching for a challenge with real impact. Meeting Niazi, I saw it. As a hardcore engineer who immigrated from a rural family of 10 in India, building technology that helps people is what drives me.',
    tags: ['NYU Alum', 'NSF I-Corps', 'Hardcore Engineer']
  },
];

const OurTeam = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>The Founders</h2>
        <p className={styles.subtitle}>A partnership combining deep industry pain with deep tech expertise.</p>
      </div>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <Card key={index} className={styles.teamMemberCard}>
            <CardHeader className={styles.cardHeader}>
              <img className={styles.avatar} src={member.image} alt={member.name} />
              <div className={styles.headerText}>
                <CardTitle className={styles.name}>{member.name}</CardTitle>
                <CardDescription className={styles.role}>{member.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.tagsContainer}>
                {member.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
