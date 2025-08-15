import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import logo from '../assets/lg-logo.png';

const Header = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleConfettiClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const headerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #E5E7EB',
      backgroundColor: 'white',
    };
  
    const logoStyle = {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'inherit',
    };
  
    const navStyle = {
      display: 'flex',
      gap: '1.5rem',
    };
    
    const navLinkStyle = {
        textDecoration: 'none',
        color: '#4B5563',
        fontSize: '1rem',
    };
  
    const ctaButtonStyle = {
      backgroundColor: '#DC2626', // Primary Accent
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      marginRight: '0.5rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      textDecoration: 'none',
    };
  
    return (
      <header style={headerStyle}>
        {showConfetti && <Confetti />}
        <Link to="/" style={logoStyle}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <img
              src={logo}
              alt="LoadGuard Logo"
              style={{
                height: 'clamp(2rem, 6vw, 2.5rem)',
                width: 'auto',
                display: 'block',
                borderRadius: '0.5rem',
              }}
            />
            <span style={{
              fontSize: 'clamp(2rem, 6vw, 2.5rem)',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              lineHeight: 1
            }}>
              LOADGUARD
            </span>
          </span>
        </Link>
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle}>Platform</Link>
          <Link to="/solutions" style={navLinkStyle}>Solutions</Link>
          <Link to="/about" style={navLinkStyle}>About Us</Link>
          <Link to="/blog" style={navLinkStyle}>Blog</Link>
        </nav>
        <div>
          <Link to="/contact" style={{...navLinkStyle, marginRight: '1rem'}} onClick={handleConfettiClick}>Contact Us</Link>
          <Link to="/pilot" style={ctaButtonStyle} onClick={handleConfettiClick}>Request a Pilot</Link>
          <Link to="/login" style={{
              ...ctaButtonStyle,
              marginRight: '1rem',
              backgroundColor: '#2563EB', // Secondary Accent (blue-600)
              color: 'white',
              border: 'none',
              transition: 'background 0.3s, transform 0.2s',
              position: 'relative',
              overflow: 'hidden',
              padding: '0.75rem 1.5rem', // Match ctaButtonStyle
              borderRadius: '0.5rem',    // Match ctaButtonStyle
              fontWeight: 'bold',        // Match ctaButtonStyle
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #2563EB 60%, #1D4ED8 100%)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(37,99,235,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#2563EB';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Login
          </Link>
        </div>
      </header>
    );
  };

  export default Header;