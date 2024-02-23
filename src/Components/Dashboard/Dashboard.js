import React from 'react'
import '../../CSS/Dashboard/Dashboard.css'
import Questionnaire from '../Checkout/Questionnaire'

function Dashboard() {

  return (
    <div className='Dashboard'>
      <div className="dashboard__container">
        <div className="dashboard__header">
            <img src="/images/favicon/favicon.png" alt="logo" />
        </div>
        <Questionnaire />
      </div>
    </div>
  )
}

export default Dashboard
