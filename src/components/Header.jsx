import logo from '../assets/lg-logo.png';

const Header = ({ setPage }) => {
    // Styles are defined as JavaScript objects.
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
      cursor: 'pointer',
    };
  
    const navStyle = {
      display: 'flex',
      gap: '1.5rem',
    };
    
    const navButtonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        color: '#4B5563',
    };
  
    const ctaButtonStyle = {
      backgroundColor: '#DC2626', // Primary Accent
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: 'bold',
    };
  
    return (
      <header style={headerStyle}>
        <div style={logoStyle} onClick={() => setPage('home')}>
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
        </div>
        <nav style={navStyle}>
          <button style={navButtonStyle} onClick={() => setPage('home')}>Platform</button>
          <button style={navButtonStyle} onClick={() => setPage('solutions')}>Solutions</button>
          <button style={navButtonStyle} onClick={() => setPage('about')}>About Us</button>
          <button style={navButtonStyle} onClick={() => setPage('blog')}>Blog</button>
        </nav>
        <div>
          <button style={{...navButtonStyle, marginRight: '1rem'}} onClick={() => setPage('contact')}>Contact Us</button>
          <button style={ctaButtonStyle}>Request a Pilot</button> {/* Sends to form, use Vapi to call them as alternative to form */}
          <button
            style={{
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
            onClick={() => setPage('login')}
          >
            Login
          </button>
        </div>
      </header>
    );
  };

  export default Header;