import React, { useState } from 'react';
import styles from './PilotRequest.module.css';

const PilotRequestForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: `Pilot Program Request from ${data.companyName}`,
          ...data
        }),
      });

      if (response.ok) {
        setStatus('Request submitted successfully!');
        event.target.reset();
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error: Could not submit your request. Please try again later.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Request a Pilot Program</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name='firstName' required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name='lastName' required />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' name='phone' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='companyName'>Company Name</label>
          <input type='text' id='companyName' name='companyName' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='companyLocation'>Company Location</label>
          <input type='text' id='companyLocation' name='companyLocation' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='inquiry'>Short description of your inquiry and problem</label>
          <textarea id='inquiry' name='inquiry' rows='5' required></textarea>
        </div>
        <button type='submit' className={styles.submitButton}>Submit Request</button>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </div>
  );
};

export default PilotRequestForm;