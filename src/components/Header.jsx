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
          LOADGUARD
        </div>
        <nav style={navStyle}>
          <button style={navButtonStyle} onClick={() => setPage('home')}>Platform</button>
          <button style={navButtonStyle} onClick={() => setPage('solutions')}>Solutions</button>
          <button style={navButtonStyle} onClick={() => setPage('about')}>About Us</button>
        </nav>
        <div>
          <button style={{...navButtonStyle, marginRight: '1rem'}} onClick={() => setPage('contact')}>Contact Sales</button>
          <button style={ctaButtonStyle}>Request a Pilot</button>
        </div>
      </header>
    );
  };

  export default Header;