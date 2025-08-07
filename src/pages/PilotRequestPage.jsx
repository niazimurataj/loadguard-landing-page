import React from 'react';
import PilotRequestForm from '../components/PilotRequest';
import styles from './PilotRequestPage.module.css';

const PilotRequestPage = () => {
  return (
    <div className={styles.pageContainer}>
      <PilotRequestForm />
    </div>
  );
};

export default PilotRequestPage;
