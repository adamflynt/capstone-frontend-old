import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../images/merit-banking-1.png'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        {/* <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link> */}
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        {/* <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link> */}
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                </div> */}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src={logo} alt='logo' className='navbar-logo-image' />
                        </Link>
                    </div>
                    <small className='website-rights'>Voodo Children © 2021</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            href='https://www.facebook.com/meritamerica.org/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            href='https://www.instagram.com/wearemeritamerica/?hl=en'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://twitter.com/meritamerica?lang=en'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://www.linkedin.com/school/meritamerica/'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
