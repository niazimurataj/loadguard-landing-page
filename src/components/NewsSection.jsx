import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogPostCard from './BlogPostCard';
import styles from './NewsSection.module.css';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  // Get the most recent 3 posts to display on the homepage
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>News & Insights</h2>
        <Link to="/blog" className={styles.viewAllLink}>View All &rarr;</Link>
      </div>
      <div className={styles.postsGrid}>
        {recentPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;