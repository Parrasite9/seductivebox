import React from 'react'
import '../../CSS/Home/Anchor.css'

import WindowWidth from '../CustomHook/WindowWidth'

function Anchor() {

  const width = WindowWidth()
  const isMobile = width < 750
  const isTablet = width >= 750 && width < 1000
  const isDesktop = width > 1000

  return (
    <div className='Anchor'>
      <div className="anchor__container">

        {isMobile && (
          <div className="mobile__anchor">
            <div className="cta">
              <h2>Discover Something Sexy In You!</h2>
              <button>Take Style Quiz</button>
            </div>

            <div className="anchor__img">
              <img src="images/anchor/bra.png" alt="Bra" />
            </div>
            <div className="anchor__img">
              <img src="images/anchor/model1.png" alt="model" />
            </div>

            <div className="quote">
              <h2>"Lingerie is not about seducing men; It's about embracing womanhood"</h2>
              <p>-Dita Von Teese</p>
            </div>

            <div className="anchor__img">
              <img src="images/anchor/model2.png" alt="model2" />
            </div>
            <div className="anchor__img">
              <img src="images/anchor/pantyset.png" alt="panty-set" />
            </div>

            <div className="quote quote2">
              <h2>"My wife and I absolute LOVE our SeductiveBox subscription! This bring more excitement to our love life. Plus this is the only subscription that gets unwrapped TWICE!"</h2>
              <p>-Wendy S.</p>
            </div>
          </div>
        )}  
        
        {isTablet && (
          <div className="tablet__container">
            <div className="quote__container">
              <h2>"Lingerie is not about seducing men; It's about embracing womanhood"</h2>
              <p>-Dita Von Teese</p>
            </div>

            <div className="tablet__img__container">
            <img src="images/anchor/model1.png" alt="model" />
            </div>

            <div className="tablet__img__container">
            <img src="images/anchor/model2.png" alt="model" />
            </div>

            <div className="tablet__cta">
              <h2>Discover Something Sexy In You!</h2>
              <button>Take Style Quiz</button>
            </div>

            <div className="quote__container">
              <h2>"My wife and I absolute LOVE our SeductiveBox subscription! This bring more excitement to our love life. Plus this is the only subscription that gets unwrapped TWICE!"</h2>
              <p>-Wendy S.</p>
            </div>

            <div className="tablet__img__container">
            
            <img src="images/anchor/model3.png" alt="model" />

            </div>
          </div>
        )}

        {isDesktop && (
          <></>
        )}
      </div>
    </div>
  );

}

export default Anchor
