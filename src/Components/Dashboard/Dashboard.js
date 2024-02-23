import React, { useState } from 'react'
import '../../CSS/Dashboard/Dashboard.css'
import Checkout from '../Checkout/Checkout'
import Questionnaire from '../Checkout/Questionnaire'

function Dashboard() {

    const [showCheckout, setShowCheckout] = useState(false)

    const handleCompleteQuestionnaire = () => {
        setShowCheckout(true)
    }

  return (
    <div className='Dashboard'>
      <div className="dashboard__container">
        <div className="dashboard__header">
            <img src="/images/favicon/favicon.png" alt="logo" />
        </div>

        {!showCheckout ? (
            <Questionnaire onComplete={handleCompleteQuestionnaire} />
        ) : (
            <Checkout />
        )}
      </div>
    </div>
  )
}

export default Dashboard
