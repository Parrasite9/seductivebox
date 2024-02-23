import React from 'react'
import '../../CSS/Dashboard/Dashboard.css'
import Questionnaire from '../Checkout/Questionnaire'

function Dashboard() {

  return (
    <div className='Dashboard'>
      <div className="dashboard__container">
        <Questionnaire />
      </div>
    </div>
  )
}

export default Dashboard
