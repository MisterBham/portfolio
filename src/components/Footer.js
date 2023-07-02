import React from 'react';
import '../styles/footer.css';

const styles = {
    footerStyle: {
        background: '#D9D9D9'
    },
};

function Footer() {
    return (
        <footer style={styles.footerStyle} className='footer'>
            <ul>
                <li>
                    <a href='mailto:misterbham.dev@gmail.com'>misterbham.dev@gmail.com</a>
                </li>
                <li>
                    <a href='https://github.com/MisterBham'>GitHub</a>
                </li>
                <li>
                    <a href='https://twitter.com/misterbham'>Twitter</a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/brianhamlin/'>LinkedIn</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;