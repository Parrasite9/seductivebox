import React from 'react'
import { useEffect, useState } from 'react';

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
