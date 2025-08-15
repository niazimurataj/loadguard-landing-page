import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
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
      <Link to="/blog" className={styles.backLink}>Back to Blog</Link>
      <header className={styles.header}>
        <p className={styles.meta}>{post.category} | {post.date}</p>
        <h1 className={styles.title}>{post.title}</h1>
      </header>
      <div className={styles.imageWrapper}>
        <img src={post.imageUrl} alt={post.title} />
      </div>
      <main className={styles.content}>
        <ReactMarkdown
          components={{
            h2: ({node, ...props}) => <h2 className={styles.contentH2} {...props} />,
            h3: ({node, ...props}) => <h3 className={styles.contentH3} {...props} />,
            p: ({node, ...props}) => <p className={styles.contentP} {...props} />,
            ul: ({node, ...props}) => <ul className={styles.contentUl} {...props} />,
            li: ({node, ...props}) => <li className={styles.contentLi} {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </main>
    </div>
  );
};

export default SinglePostPage;
