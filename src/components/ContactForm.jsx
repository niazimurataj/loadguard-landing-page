import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `New Contact Message from ${data.name}`,
          ...data
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        event.target.reset();
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error: Could not send your message. Please try again later.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' rows='5' required></textarea>
        </div>
        <button type='submit' className={styles.submitButton}>Send Message</button>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
