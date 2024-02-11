import React from 'react'
import '../../CSS/Home/Box.css'

function Box() {
  return (
    <div className='Box'>
      <h1>WHAT'S IN THE SEDUCTIVEBOX?</h1>
      <p>Styles hand picked just for you, based on your unique preferences!</p>

      <div className="box__container">
        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/product/garter.png' alt='product-img' />
          <p>Gartered Lingerie</p>
        </div>

        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/product/teddy.png' alt='teddy' />
          <p>Teddys</p>
        </div>

        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/product/bodysuit.png' alt='bodysuit' />
          <p>Bodysuits</p>
        </div>

        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/product/babydoll.png' alt='babydoll' />
          <p>Babydoll's</p>
        </div>

        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/product/pantyset.png' alt='pantyset' />
          <p>Bra & Panty Sets</p>
        </div>

      </div>

      <button>Take Style Quiz</button>
    </div>
  )
}

export default Box
