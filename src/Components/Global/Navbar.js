import React, { useEffect, useState } from 'react'
import '../../CSS/Global/Navbar.css'

// COMPONENTS 
import WindowWidth from '../CustomHook/WindowWidth';

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {

    const width = WindowWidth()
    const isMobile = width < 1000

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div className='Navbar'>
        <div className="logo__container">
            <img src="images/logo/LogoHD.png" alt="logo" />
        </div>

        {isMobile ? (
            <div className="mobile__container">
                <div className="burger__menu">
                    <MenuIcon />
                </div>
            </div>

        ) : (
            <div className="navlinks">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">FAQ</a>
                <a href="">How To</a>
                <a href="">Contact Us</a>
                {isLoggedIn ? (
                    <>
                        <Link to="#">Account</Link>
                        <Link to="/" onClick={handleLogout}>Logout</Link>                    </>
                    ) : (
                        <Link to="/login">Login</Link>
                )}
            </div>
        )

        }
      
    </div>
  )
}

export default Navbar
