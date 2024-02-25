import React from 'react';
import '../../CSS/Dashboard/Dashboard.css';

function AccountDetails({ userData }) {
    return (
        <div className='Dashboard'>
            <div className="dashboard__container">
                <div className="dashboard__header">
                    <img src="/images/favicon/favicon.png" alt="logo" />
                </div>
                <div className="user-info">
                    <div>Name: {userData.name}</div>
                    <div>Address: {userData.address}, {userData.city}, {userData.state}, {userData.zip}</div>
                    <button>Update Address</button>
                    <div>Last 4 of CC: {userData.ccNumber.slice(-4)}</div>
                    <button>Update Credit Card</button>
                </div>
            </div>
        </div>
    );
}

export default AccountDetails;
