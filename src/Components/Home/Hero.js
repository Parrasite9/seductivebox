import React from 'react'
import '../../CSS/Home/Hero.css'

// COMPONENTS 
import WindowWidth from '../CustomHook/WindowWidth';

function Hero() {

    const width = WindowWidth()
    const isMobile = width < 1000

  return (
    <div className='Hero'>
      <div className="hero__container">
        <div className="hero__text__container">
            <div className="hero__text">
                <h1>A STYLE FOR EVERY OCCASION</h1>
                <h4>Lingerie, Sleepwear, and more... Curated just for <strong>YOU!</strong></h4>
                <button>Take Style Quiz</button>
                <div className="sizing__container">
                    
                    {/* NAME AND SIZE  */}
                    <div className="name__and__size">
                        <h4>BANDS</h4>
                        <h4>32-48</h4>
                    </div>
                    
                    {/* NAME AND SIZE  */}
                    <div className="name__and__size">
                        <h4>WAISTS</h4>
                        <h4>24-40</h4>
                    </div>

                    {/* NAME AND SIZE  */}
                    <div className="name__and__size">
                        <h4>SIZES</h4>
                        <h4>4-8</h4>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* IMAGE  */}
      <div className="hero__img">
        <img src='images/hero/1.png' alt='hero-img' />
      </div>
    </div>
  )
}

export default Hero
