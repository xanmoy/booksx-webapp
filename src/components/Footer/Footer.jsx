import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 BooksX. All rights reserved.</p>
                <p>Designed by <a className='footer-text' href="https://dev.xanmoy.me"><span>Tanmoy Ganguly</span></a> </p>
            </div>
        </footer>
    );
};

export default Footer;
