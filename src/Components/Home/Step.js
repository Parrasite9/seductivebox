import React from 'react'
import '../../CSS/Home/Step.css'
function Step() {
  return (
    <div className='STEP'>
        <h2>How It Works</h2>

        <div className="step__container">
          
          <div className="div1 step__info step1">
            <img src="images/steps/1.gif" alt="step-img" />
          </div>
          
          <div className="div2 step__info step1">
            <h1><span>..</span>STEP 1</h1>
            <h6>Tell us your preferences</h6>
            <p>You pick your fit & style preferences for items you'd like to try on at home.</p>
          </div>
          
          <div className="div3 step__info step2">
            <img src="images/steps/2.jpg" alt="step-img" />
          </div>
          
          <div className="div4 step__info step2">
            <h1><span>..</span>STEP 2</h1>
            <h6>We curate your box</h6>
            <p>We match you with our best-selling products, expertly designed and fit in-house - from lingerie, sleepwear, or accessories - NO CURATION FEE!</p>
          </div>
          
          <div className="div5 step__info step3">
            <img src="images/steps/3.gif" alt="step-img" />
          </div>
          
          <div className="div6 step__info step3">
            <h1><span>..</span>STEP 3</h1>
            <h6>Try on, comfortably</h6>
            <p>Avoid the hassle of going to your local adult store just to look at the same pieces of lingerie every time. With SeductiveBox, have lingerie you love shipped right to your door!</p>
          </div>
          
          <div className="div7">

          </div>
        </div>
    </div>
  )
}

export default Step
