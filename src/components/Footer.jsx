import React from 'react';
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Footer = () => {

    const footerLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
        fontFamily: 'monospace'
    };

    const footerLinkStyle = {
        color: 'white',
        marginLeft: '1rem',
        textDecoration: 'none',
    };

    return (
        <footer style={{ 
            backgroundColor: '#1976d2', 
            fontFamily: 'monospace', 
            color: 'white',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            textAlign: 'center',
            width: '100%',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'            
            }}>
            
            <div className="footer-container">
                <div className="footer-links" style={footerLinksStyle}>
                    <Link to="/contact" style={footerLinkStyle} className="footer-link">Contacto</Link>
                    <Link to="/about" style={footerLinkStyle}className="footer-link">Acerca de</Link>
                </div>

                <p className="footer-text">© 2023 Shopping. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;


