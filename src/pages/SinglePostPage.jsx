import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import styles from './SinglePostPage.module.css';

const SinglePostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>By LoadGuard Staff | {post.date} | {post.category}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={post.imageUrl} alt={post.title} />
      </div>
      <div className={styles.content}>
        {/* This is where the full blog post content would go. For now, we'll use the summary. */}
        <p>{post.summary}</p>
        <p>Full blog post content coming soon...</p>
      </div>
    </div>
  );
};

export default SinglePostPage;
