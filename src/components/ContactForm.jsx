import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Send us a message</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message'>Message</label>
          <textarea id='message' rows='5'></textarea>
        </div>
        <button type='submit' className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
