import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/blog/${post.slug}`} className={styles.readMore}>Read More &rarr;</Link>
      </div>
    </div>
  );
};

export default BlogPostCard;