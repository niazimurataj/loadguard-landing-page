import React from 'react';
import styles from './InstallationGuide.module.css';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const PowerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v10" />
    <path d="M18.4 6.6a9 9 0 1 1-12.79.03" />
  </svg>
);

const BoxIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const LayoutDashboardIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="3" y="15" rx="1" />
    <rect width="7" height="5" x="14" y="11" rx="1" />
  </svg>
);

const steps = [
  {
    icon: PowerIcon,
    title: "Power On Device",
    description: "Power on your LoadGuard device - if the red light is blinking once a minute, you're all good!",
  },
  {
    icon: BoxIcon,
    title: "Place in Container",
    description: "Place the LoadGuard device within a reefer container.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "Log On to Dashboard",
    description: "Log on to your LoadGuard.io dashboard with your given credentials - our service will automatically populate your BoL #, Device #, and live information!",
  },
];

const InstallationGuide = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Easy Installation</h2>
        <p className={styles.subtitle}>Get up and running in minutes.</p>
      </div>
      <div className={styles.guideContainer}>
        <Card className={styles.guideCard}>
          <CardHeader>
            <CardTitle className={styles.cardTitle}>Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepIconWrapper}>
                    <step.icon className={styles.stepIcon} />
                  </div>
                  <div className={styles.stepTextContainer}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <p className={styles.comingSoon}>Full visual guide coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstallationGuide;
