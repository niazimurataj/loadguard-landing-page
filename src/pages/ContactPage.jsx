import React from 'react';
import styles from './ContactPage.module.css';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <ContactInfo />
      </div>
      <div className={styles.rightSide}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
