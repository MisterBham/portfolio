import React from 'react';
import '../styles/header.css';
import Nav from './Nav';

const styles = {
    headerStyle: {
        background: '#353535',
    },
    headingStyle: {
        fontSize: '1rem',
    },
};

function Header() {
    return (
        <header style={styles.headerStyle} className='header'>
            <h1 style={styles.headingStyle}>Development Portfolio</h1>
            <Nav />
        </header>
    );
}

export default Header;