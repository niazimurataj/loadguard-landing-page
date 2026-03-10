import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const footerStyle = {
    textAlign: 'center',
    padding: '2rem',
    marginTop: 'auto',
    backgroundColor: theme === 'light' ? '#F3F4F6' : '#0B1220',
    color: theme === 'light' ? '#4B5563' : '#D1D5DB',
    borderTop: theme === 'light' ? '1px solid #E5E7EB' : '1px solid #1F2937',
  };

  const textStyle = {
    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
    margin: 0,
  };

  return (
    <>
      <footer style={footerStyle} className="responsive-footer" role="contentinfo">
        <p style={textStyle}>&copy; {new Date().getFullYear()} Project LoadGuard, Inc. All rights reserved.</p>
      </footer>
      <style>{`
        @media (max-width: 768px) {
          .responsive-footer {
            padding: 1.5rem 1rem !important;
          }
        }
        @media (max-width: 576px) {
          .responsive-footer {
            padding: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
