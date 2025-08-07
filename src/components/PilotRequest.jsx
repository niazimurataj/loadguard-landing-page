import React from 'react';
import styles from './PilotRequest.module.css';

const PilotRequestForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    const mailtoLink = `mailto:niazi@loadguard.io,akshay@loadguard.io?subject=Pilot Program Request from ${data.companyName}&body=First Name: ${data.firstName}%0D%0ALast Name: ${data.lastName}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0ACompany Name: ${data.companyName}%0D%0ACompany Location: ${data.companyLocation}%0D%0AInquiry: ${data.inquiry}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Request a Pilot Program</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' name='firstName' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' name='lastName' />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' name='phone' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='companyName'>Company Name</label>
          <input type='text' id='companyName' name='companyName' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='companyLocation'>Company Location</label>
          <input type='text' id='companyLocation' name='companyLocation' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='inquiry'>Short description of your inquiry and problem</label>
          <textarea id='inquiry' name='inquiry' rows='5'></textarea>
        </div>
        <button type='submit' className={styles.submitButton}>Submit Request</button>
      </form>
    </div>
  );
};

export default PilotRequestForm;