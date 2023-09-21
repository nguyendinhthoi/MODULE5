// eslint-disable-next-line no-unused-vars
import React from 'react';

function Header() {
    const headerStyle = {
        background: '#333',
        color: '#fff',
        padding: '10px',
        marginBottom: '20px'
    };

    const navStyle = {
        listStyle: 'none',
        padding: '0',
    };

    const listItemStyle = {
        display: 'inline',
        margin: '0 10px',
    };

    return (
        <header style={headerStyle}>
            <div className="header">
                <h1>Furama Service</h1>
                <ul style={navStyle}>
                    <li style={listItemStyle}>
                            Home
                    </li>
                    <li style={listItemStyle}>
                            Employee
                    </li>
                    <li style={listItemStyle}>
                            Contract
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;