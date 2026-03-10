import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import logo from '../assets/lg-logo.png';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileMenuOpen]);

  const handleConfettiClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close on route change
  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 769 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [mobileMenuOpen]);

  // Escape key, focus trap, and click-outside handling
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // Disable transitions for users preferring reduced motion
      if (menuRef.current) menuRef.current.style.transition = 'none';
    }

    // Focus first focusable element in menu
    const focusables = menuRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables && focusables[0];
    const last = focusables && focusables[focusables.length - 1];
    first?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === 'Tab' && focusables && focusables.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onPointerDown = (e) => {
      const target = e.target;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      if (prefersReduced && menuRef.current) menuRef.current.style.transition = '';
    };
  }, [mobileMenuOpen]);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: theme === 'light' ? '1px solid #E5E7EB' : '1px solid #374151',
    backgroundColor: theme === 'light' ? 'rgba(255,255,255,0.85)' : 'rgba(17,24,39,0.85)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backdropFilter: 'saturate(180%) blur(10px)',
    WebkitBackdropFilter: 'saturate(180%) blur(10px)',
    transition: 'background-color 0.5s, border-bottom 0.5s, backdrop-filter 0.3s',
    flexWrap: 'nowrap',
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
    color: theme === 'light' ? '#4B5563' : '#D1D5DB',
    fontSize: '1rem',
    transition: 'color 0.5s',
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.75rem',
  };

  const hamburgerLineStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: theme === 'light' ? '#111827' : '#D1D5DB',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(17, 24, 39, 0.98)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1000,
    pointerEvents: mobileMenuOpen ? 'auto' : 'none',
    padding: 'max(2rem, env(safe-area-inset-top)) 1.5rem 2rem',
  };

  const mobileNavLinkStyle = {
    textDecoration: 'none',
    color: theme === 'light' ? '#111827' : '#D1D5DB',
    fontSize: '1.5rem',
    fontWeight: '600',
    transition: 'color 0.3s',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: theme === 'light' ? '#111827' : '#D1D5DB',
  };

  const ctaButtonStyle = {
    backgroundColor: '#DC2626', // Primary Accent
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  return (
    <>
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
        {/* Desktop Navigation */}
        <nav style={navStyle} className="desktop-nav">
          <Link to="/" style={navLinkStyle}>Platform</Link>
          <Link to="/solutions" style={navLinkStyle}>Solutions</Link>
          <Link to="/about" style={navLinkStyle}>About Us</Link>
          <Link to="/blog" style={navLinkStyle}>Blog</Link>
        </nav>
        <div className="desktop-nav">
          <Link to="/contact" style={{ ...navLinkStyle, marginRight: '1rem' }} onClick={handleConfettiClick}>Contact Us</Link>
          <Link to="/pilot" style={{ ...ctaButtonStyle, marginRight: '0.5rem' }} onClick={handleConfettiClick}>Request a Pilot</Link>
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
              e.currentTarget.style.transform = 'scale(1.03)';
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

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          style={hamburgerStyle}
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          ref={buttonRef}
        >
          <span style={hamburgerLineStyle}></span>
          <span style={hamburgerLineStyle}></span>
          <span style={hamburgerLineStyle}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          style={mobileMenuStyle}
          aria-hidden={!mobileMenuOpen}
          role="dialog"
          aria-modal="true"
          ref={menuRef}
        >
          <button
            style={closeButtonStyle}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
          <Link to="/" style={mobileNavLinkStyle} onClick={closeMobileMenu}>Platform</Link>
          <Link to="/solutions" style={mobileNavLinkStyle} onClick={closeMobileMenu}>Solutions</Link>
          <Link to="/about" style={mobileNavLinkStyle} onClick={closeMobileMenu}>About Us</Link>
          <Link to="/blog" style={mobileNavLinkStyle} onClick={closeMobileMenu}>Blog</Link>
          <Link to="/contact" style={mobileNavLinkStyle} onClick={() => { closeMobileMenu(); handleConfettiClick(); }}>Contact Us</Link>
          <Link to="/pilot" style={{ ...ctaButtonStyle, fontSize: '1.25rem', padding: '1rem 2rem' }} onClick={() => { closeMobileMenu(); handleConfettiClick(); }}>Request a Pilot</Link>
          <Link to="/login" style={{ ...ctaButtonStyle, fontSize: '1.25rem', padding: '1rem 2rem', backgroundColor: '#2563EB' }}>Login</Link>
        </div>
      </header>
      {/* Inline styles for responsive behavior */}
      <style>{`
        /* Ensure desktop containers do not wrap and align items */
        .desktop-nav { display: flex; align-items: center; gap: 0.75rem; flex-wrap: nowrap; }

        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-menu { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .hamburger-menu { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;