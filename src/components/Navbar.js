import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../images/merit-banking-1.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' onClick={closeMobileMenu}>
                        <img src={logo} alt='logo' className='navbar-logo-image' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/accounts' className='nav-links' onClick={closeMobileMenu}>
                                Accounts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log Out
                            </Link>
                        </li>
                    </ul>
                    {button && <Button to='/' buttonStyle='btn--outline'>LOG OUT</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;