import React from 'react'
import { useEffect, useState } from 'react';
import '../../CSS/Global/Navbar.css'

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {

    }, [])

  return (
    <div className='Navbar'>
        {isMobile ? (
            <div className="mobile__container">
                <div className="logo__container">
                    <img src="images/logo/Logo.png" alt="logo" />
                </div>

                <div className="burger__menu">
                    <MenuIcon />
                </div>
            </div>

        ) : (
            <>
            
            </>
        )

        }
      
    </div>
  )
}

export default Navbar
