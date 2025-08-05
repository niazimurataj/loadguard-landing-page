import React from 'react';
import styles from './AlertingChain.module.css';

const AlertingChain = () => {
  // Placeholder data
  const contacts = [
    { id: 1, name: 'Niazi M', email: 'niazi@loadguard.io', phone: '201-657-9820' },
    { id: 2, name: 'Akshay H', email: 'akshay@loadguard.io', phone: '551-470-8796' },
  ];

  return (
    <div className={styles.alertingChainContainer}>
      <h2>Alerting Chain</h2>
      <table className={styles.contactsTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button className={styles.editButton}>Edit</button>
              </td>
              <td>
                <button className={styles.alertButton}>Alert</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.addContactFormContainer}>
        <h3>Add a contact</h3>
        <form className={styles.addContactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <button type="submit" className={styles.addButton}>Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AlertingChain;
