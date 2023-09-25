import React from 'react';

function Footer() {
    const footerStyle = {
        background: '#FFDAB9',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        padding: '1rem 0',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    };

    const contentStyle = {
        paddingBottom: '60px', // Adjust this value to create space for the footer
    };

    const copyrightStyle = {
        fontSize: '0.9rem',
        margin: '0',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#634C36',
    };

    return (
        <div style={contentStyle}>
            {/* Your content here */}
            <footer style={footerStyle}>
                <div className="container">
                    <p style={copyrightStyle}>&copy; Choose your choice</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
