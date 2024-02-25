import React, { useEffect, useState } from 'react'
import '../../CSS/Global/Navbar.css'

// COMPONENTS 
import WindowWidth from '../CustomHook/WindowWidth';

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

function Navbar() {

    const width = WindowWidth()
    const isMobile = width < 1000

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        // Check if the user is logged in (you can adjust this based on your authentication logic)
        const user = localStorage.getItem('user');
        const isLoggedIn = !!user;
        console.log('User is logged in:', isLoggedIn);
        setIsLoggedIn(isLoggedIn);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        // Additional logout actions if needed
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className='Navbar'>
            <div className="logo__container">
            <Link to='/'>
                <img src="images/logo/LogoHD.png" alt="logo" />
            </Link>
            </div>

            {isMobile ? (
                <>
                    <div className="burger__menu" onClick={toggleMobileMenu}>
                        <MenuIcon />                    
                    </div>
                    {showMobileMenu && (
                        <div className="mobile__navlinks">
                            <div className="close__icon" onClick={toggleMobileMenu}>
                                <CloseIcon />
                            </div>
                            <a href="#" onClick={toggleMobileMenu}>Home</a>
                            <a href="#" onClick={toggleMobileMenu}>Products</a>
                            <a href="#" onClick={toggleMobileMenu}>FAQ</a>
                            <a href="#" onClick={toggleMobileMenu}>How To</a>
                            <a href="#" onClick={toggleMobileMenu}>Contact Us</a>
                            {isLoggedIn ? (
                                <>
                                    <Link to="#" onClick={toggleMobileMenu}>Account</Link>
                                    <Link to="/" onClick={handleLogout}>Logout</Link>
                                </>
                            ) : (
                                <Link to="/login" onClick={toggleMobileMenu}>Login</Link>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <div className="navlinks">
                    <Link to='/'>Home</Link>
                    <a href="">Products</a>
                    <a href="">FAQ</a>
                    <a href="">How To</a>
                    <a href="">Contact Us</a>
                    {isLoggedIn ? (
                        <>
                            <Link to="#">Account</Link>
                            <Link to="/" onClick={handleLogout}>Logout</Link>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default Navbar
