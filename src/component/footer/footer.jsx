import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <div className='footer-links_logo col-xl-4'>
                    <h3>Grubbix Catering Service Limited</h3>
                    <p>Lagos, Nigeria</p>
                </div>
                <div className='footer-links_div col'>
                    <h4>Links</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Email</p>
                </div>
                <div className='footer-links_div col'>
                    <h4>Company</h4>
                    <p>Services</p>
                    <p>Careers</p>
                    <p>Partners</p>
                </div>
                <div className='footer-links_div col'>
                    <h4>Get in touch</h4>
                    <p>Lagos, Nigeria</p>
                    <p><a href='tel:+234-803-404-1080'>0803 404 1080</a></p>
                    <p><a href='tel:+234-708-089-6778'>0708 089 6778</a></p>
                    <p><a href='tel:+234-817-943-9762'>0817 943 9762</a></p>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>©2022 Grubbix. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
