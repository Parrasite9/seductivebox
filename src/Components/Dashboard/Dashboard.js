import React, { useEffect, useState } from 'react'
import '../../CSS/Dashboard/Dashboard.css'
import Checkout from '../Checkout/Checkout'
import Questionnaire from '../Checkout/Questionnaire'

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [showCheckout, setShowCheckout] = useState(false)

    const handleCompleteQuestionnaire = () => {
        setShowCheckout(true)
    }

    useEffect(() => {
        // Fetch user data from the backend
        fetch('/user-data') // Adjust this endpoint as needed
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
      }, []);

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

        {userData && (
          <div className="user-info">
            <div>Name: {userData.name}</div>
            <div>Address: {userData.address}, {userData.city}, {userData.state}, {userData.zip}</div>
            <button>Update Address</button>
            <div>Last 4 of CC: {userData.ccNumber.slice(-4)}</div>
            <button>Update Credit Card</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
