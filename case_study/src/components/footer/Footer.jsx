import React from 'react';

function Footer() {
    const footerStyle = {
        background: '#FFDAB9', // Peach background color to match the header
        color: '#333', // Text color (dark gray)
        fontFamily: 'Arial, sans-serif', // Font family
        padding: '1rem 0', // Padding
        textAlign: 'center', // Center-align the content
        borderTop: '1px solid #ccc', // Add a subtle top border
        borderRadius: '8px 8px 0 0', // Rounded corners only at the top
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow at the top
    };

    const copyrightStyle = {
        fontSize: '0.9rem', // Font size for the copyright text
        margin: '0', // Remove margin for the copyright text
        textTransform: 'uppercase', // Uppercase the copyright text
        fontWeight: 'bold', // Make the copyright text bold
        color: '#634C36', // Adjust the text color to complement the background
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p style={copyrightStyle}>&copy; Choose your choice</p>
            </div>
        </footer>
    );
}

export default Footer;
