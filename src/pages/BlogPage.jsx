import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogPostCard from '../components/BlogPostCard';
import styles from './BlogPage.module.css';

const BlogPage = () => {
  const featuredPost = blogPosts.find(p => p.featured);
  const otherPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className={styles.blogPage}>
      <header className={styles.blogHeader}>
        <h1>LoadGuard Insights</h1>
        <p>The latest analysis on supply chain security, technology, and compliance.</p>
      </header>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className={styles.featuredSection}>
          <div className={styles.featuredImageWrapper}>
            <img src={featuredPost.imageUrl} alt={featuredPost.title} />
          </div>
          <div className={styles.featuredContent}>
            <p className={styles.featuredCategory}>{featuredPost.category}</p>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.summary}</p>
            <a href="#" className={styles.readMore}>Read Full Story &rarr;</a>
          </div>
        </section>
      )}

      {/* Grid of Other Posts */}
      <section className={styles.postsGrid}>
        {otherPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default BlogPage;