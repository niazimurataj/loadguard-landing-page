import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'What is the battery life of the LoadGuard device?',
    answer: 'The LoadGuard device has a battery life of up to 2 years, depending on usage and reporting frequency.',
  },
  {
    question: 'Is the device waterproof?',
    answer: 'Yes, the LoadGuard device is IP67 rated, making it resistant to dust and water ingress.',
  },
  {
    question: 'What kind of sensors are included?',
    answer: 'The device includes sensors for temperature, humidity, light, shock, and VOCs ("smell" sensors).',
  },
  {
    question: 'Who is your solution for?',
    answer: 'We provide devices for product importers and exporters (typically LatAM -> US/EU) to manage quality, stay safe from crime/smuggling, and avoid fines/penalties. If you are a Latin American exporter to the US or Europe - or a US/EU importer from LATAM - you are probably already familiar with the problem we solve.'
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
      </div>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.question} onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className={`${styles.icon} ${activeIndex === index ? styles.open : ''}`}>+</span>
            </button>
            <div className={`${styles.answer} ${activeIndex === index ? styles.open : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
