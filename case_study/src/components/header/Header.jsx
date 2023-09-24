import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const headerStyle = {
        background: '#FFDAB9', // Peach background color
        color: '#333', // Text color (dark gray)
        fontFamily: 'Arial, sans-serif', // Font family
        padding: '1rem 0', // Padding
        textAlign: 'center', // Center-align the content
        borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow
    };

    const navStyle = {
        listStyle: 'none',
        padding: '0',
        display: 'flex',
        justifyContent: 'center', // Center-align navigation links
    };

    const listItemStyle = {
        margin: '0 20px', // Adjust spacing between navigation links
    };

    const headingStyle = {
        fontSize: '2rem', // Font size for the heading
        margin: '0', // Remove margin for the heading
        letterSpacing: '1px', // Add slight letter-spacing for style
        textTransform: 'uppercase', // Uppercase the heading text
        fontWeight: 'bold', // Make the heading text bold
        color: '#634C36', // Adjust the text color to complement the background
    };

    return (
        <header style={headerStyle}>
            <div className="container">
                <h1 style={headingStyle}>Rent Facility</h1>
                <ul style={navStyle}>
                    <li style={listItemStyle}>
                        <Link className="nav-link text-dark" to="/">
                            Home
                        </Link>
                    </li>
                    <li style={listItemStyle}>
                        <Link className="nav-link text-dark" to="/customer">
                            Customer
                        </Link>
                    </li>
                    <li style={listItemStyle}>
                        <Link className="nav-link text-dark" to="/contract">
                            Contract
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
