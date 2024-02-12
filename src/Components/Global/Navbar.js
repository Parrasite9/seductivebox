import React from 'react'
import '../../CSS/Global/Navbar.css'

// COMPONENTS 
import WindowWidth from '../CustomHook/WindowWidth';

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const width = WindowWidth()
    const isMobile = width < 1000

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
                <a href="">Login</a>
            </div>
        )

        }
      
    </div>
  )
}

export default Navbar
