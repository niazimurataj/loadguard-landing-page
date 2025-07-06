import React from 'react';
import styles from './TestimonialSection.module.css';
import authorImage from '../assets/tm_picture.png';

// In a real application, you would import the author's image.
// import authorImage from '../assets/trifon-murataj.jpg';

const TestimonialSection = () => {
  const quote = "Before LoadGuard, we relied on traditional thermographs like CLCircular and Sensitech. These were not enough to help us detect criminal smuggling before it came to port and [turned into a] disaster. We partnered with LoadGuard to develop a new system, to detect suspicious activity before the container arrives, so we can alert the authorities and avoid millions in penalties, legal, opex, and (God forbid) jail time. It's an irreplaceable part of our new compliance system - and it works just as well as the traditional thermographs for claims.";
  const author = "Trifon Murataj";
  const title = "CEO of Banaking (and Primary Design Partner)";

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContent}>
        
        {/* Left Column: Video Player */}
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/KlQh0a7bBDU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Column: Quote */}
        <div className={styles.quoteWrapper}>
          <div className={styles.quoteIcon}>
            <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 38V19C0 12.9167 1.70833 8.25 5.125 5C8.54167 1.75 13.0833 0 18.75 0V7.125C15.0833 7.125 12.0417 7.83333 9.625 9.25C7.20833 10.6667 5.83333 12.5833 5.5 15H18.75V38H0ZM29.25 38V19C29.25 12.9167 30.9583 8.25 34.375 5C37.7917 1.75 42.3333 0 48 0V7.125C44.3333 7.125 41.2917 7.83333 38.875 9.25C36.4583 10.6667 35.0833 12.5833 34.75 15H48V38H29.25Z" fill="#3B82F6"/>
            </svg>
          </div>
          <blockquote className={styles.quoteText}>
            {quote}
          </blockquote>
          {/* EDITED: The author section now includes an image */}
          <div className={styles.quoteAuthor}>
            <img 
              src={authorImage} 
              alt="Trifon Murataj" 
              className={styles.authorImage} 
            />
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>{author}</p>
              <p className={styles.authorTitle}>{title}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;