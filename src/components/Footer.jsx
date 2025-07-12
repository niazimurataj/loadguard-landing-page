const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        padding: '2rem',
        marginTop: 'auto',
        backgroundColor: '#E5E7EB',
        color: '#4B5563',
    };
    
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} Project LoadGuard, Inc. All rights reserved.</p>
        </footer>
    );
}

export default Footer;