import '../../CSS/Global/Footer.css'
import React from 'react'

function Footer() {

  const year = new Date().getFullYear(); // Gets the current year

  return (
    <div className='Footer'>
      <div className="logo">
        <img src="images/logo9/LogoHD.png" alt="logo" />
      </div>

      <div className="visitUs">
        <h2>Visit Us</h2>
        <a href=""><p>Home</p></a>
        <a href=""><p>Products</p></a>
        <a href=""><p>FAQ</p></a>
        <a href=""><p>How-to</p></a>
        <a href=""><p>Contact Us</p></a>
      </div>

      <div className="policies">
        <h2>Policies</h2>
        <a href=""><p>Return Policy</p></a>
        <a href=""><p>Shipping Policy</p></a>
        <a href=""><p>Refund Policy</p></a>
        <a href=""><p>Cookie Policy</p></a>
        <a href=""><p>Terms & Conditions</p></a>
      </div>

      <div className="social">
        <h2>Follow us on Social Media</h2>
        <a href=""><p>Facebook</p></a>
        <a href=""><p>Instagram</p></a>

      </div>

      <div className="copyright">
        <p>© {year} SeductiveBox. All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer