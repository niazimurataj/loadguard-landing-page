import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';
import styles from './AdversaryUniversePage.module.css';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from '@/components/ui/button';

const AdversaryUniversePage = () => {
  const { slug } = useParams();
  const { setTheme } = useContext(ThemeContext);
  const post = blogPosts.find(p => p.slug === 'adversary-universe');

  useEffect(() => {
    setTheme('dark');
    return () => {
      setTheme('light');
    };
  }, [setTheme]);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className={styles.contentWrapper}>
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
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button asChild size="lg" variant="destructive">
          <Link to="/pilot">Request a Pilot</Link>
        </Button>
      </div>
    </div>
  );
};

export default AdversaryUniversePage;
