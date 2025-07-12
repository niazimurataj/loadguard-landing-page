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
          <button style={{...navButtonStyle, marginRight: '1rem'}} onClick={() => setPage('login')}>Login</button>
          <button style={{...navButtonStyle, marginRight: '1rem'}} onClick={() => setPage('contact')}>Contact Us</button>
          <button style={ctaButtonStyle}>Request a Pilot</button> {/* Sends to form, use Vapi to call them as alternative to form */}
        </div>
      </header>
    );
  };

  export default Header;