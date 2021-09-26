import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="footer-area text-center">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <p>
                    Copyright &copy; 2021 by
                    <a
                        href="https://github.com/iniset"
                        target="_blank"
                        rel="noopener noreferrer"
                        >iniset</a
                    >
                    </p>
                </div>
                </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;