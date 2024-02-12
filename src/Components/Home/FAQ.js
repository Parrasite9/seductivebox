import React from 'react'
import '../../CSS/Home/FAQ.css'
function FAQ() {
  return (
    <div className='Faq'>
      <div className="faq__header">
        <h2>Frequently Asked Questions</h2>
      </div>

    <div className="faq__container">
      <div className="faq__img">
        <img src="images/faq/faq.jpg" alt="model" />
      </div>
      
      <div className="faq__questions__container">
        {/* Q and A */}
        <div className="q__and__a">
          <h3>What if I don't like what I received?</h3>
          <p>At SeductiveBox, our customers have ZERO RISK on their subscriptions! You don't like what you received? Return it!</p>
        </div>
        
        {/* Q and A */}
        <div className="q__and__a">
          <h3>Do you offer plus size lingerie?</h3>
          <p>Yes, we do! We proudly offer sizes across the entire spectrum of body types, including flattering plus size lingerie options in sizes 16-18.</p>
        </div>
        
        {/* Q and A */}
        <div className="q__and__a">
          <h3>How much does it cost?</h3>
          <p>Your SeductiveBox varies on the package you select, but can be as low as 29.99! Of course, you will always have the option to skip a month’s delivery, and you can cancel at any time.</p>
        </div>
        
        
        {/* Q and A */}
        <div className="q__and__a">
          <h3>What is the referral program?</h3>
          <p>Every customer has a UNIQUE link bound to their account. Every successful referral used with your link will reward both you and your referral $10!</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FAQ
