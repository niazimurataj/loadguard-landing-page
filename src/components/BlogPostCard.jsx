import React from 'react';
import styles from './BlogPostCard.module.css';

const BlogPostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={post.imageUrl} alt={post.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.category}>{post.category}</p>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.summary}>{post.summary}</p>
        <a href="#" className={styles.readMore}>Read More &rarr;</a>
      </div>
    </div>
  );
};

export default BlogPostCard;