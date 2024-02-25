import React, { useState } from 'react'
import '../../CSS/Checkout/Checkout.css'
import { useNavigate } from 'react-router-dom';


function Checkout({ onSubmit }) {
  const navigate = useNavigate()

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    ccNumber: '',
    expDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const subscriptionId = localStorage.getItem('subscriptionId');
  const checkoutData = { ...formData, subscriptionId };
  fetch('/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(checkoutData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Checkout successful:', data);
      // Login and redirect to home page
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      })
        .then((response) => response.json())
        .then((loginData) => {
          if (loginData.message === 'Login successful') {
            // Assuming you have a way to set the logged-in user in your app's state
            // setUser(loginData.user);
            navigate('/');
          } else {
            console.error('Login failed:', loginData.message);
          }
        })
        .catch((loginError) => {
          console.error('Error during login:', loginError);
        });
    })
    .catch((error) => {
      console.error('Error during checkout:', error);
    });
};
  

  return (
    <div className="Checkout">
      <form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
        {step === 1 ? (
          <>
            <div>
              {/* <label>Name:</label> */}
              <input required placeholder='Name' type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              {/* <label>Email:</label> */}
              <input required placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              {/* <label>Password:</label> */}
              <input required placeholder='Password' type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Next</button>
          </>
        ) : (
          <>
            <div>
              {/* <label>Address:</label> */}
              <input required placeholder='Address' type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div>
              {/* <label>City:</label> */}
              <input required placeholder='City' type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div>
              {/* <label>State:</label> */}
              <input required placeholder='State' type="text" name="state" value={formData.state} onChange={handleChange} />
            </div>
            <div>
              {/* <label>Zip Code:</label> */}
              <input required placeholder='Zipcode' type="text" name="zip" value={formData.zip} onChange={handleChange} />
            </div>
            <div>
              {/* <label>Credit Card Number:</label> */}
              <input required placeholder='Credit Card Number' type="text" name="ccNumber" value={formData.ccNumber} onChange={handleChange} />
            </div>
            <div>
              {/* <label>Expiration Date:</label> */}
              <input required placeholder='Exp Date' type="text" name="expDate" value={formData.expDate} onChange={handleChange} />
            </div>
            <div>
              {/* <label>CVV:</label> */}
              <input required placeholder='CVV' type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
            </div>
            <button type="submit">Complete Order</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Checkout 
