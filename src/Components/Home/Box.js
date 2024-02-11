import React from 'react'

function Box() {
  return (
    <div className='BOX'>
      <h1>WHAT'S IN THE SEDUCTIVEBOX?</h1>
      <p>Styles hand picked just for you, based on your unique preferences!</p>

      <div className="box__container">
        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/box/.png' alt='product-img' />
        </div>
        
        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/box/.png' alt='product-img' />
        </div>
        
        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/box/.png' alt='product-img' />
        </div>
        
        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/box/.png' alt='product-img' />
        </div>
        
        {/* INDIVIDUAL ITEM  */}
        <div className="item__container">
          <img src='images/box/.png' alt='product-img' />
        </div>
        
      </div>
    </div>
  )
}

export default Box
