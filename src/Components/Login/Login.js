import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/Login/Login.css'; 
import Navbar from '../Global/Navbar.js'
import Footer from '../Global/Footer.js'


function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Login response:', data);
                if (data.user) {
                    // Set user data in local storage or state
                    localStorage.setItem('user', JSON.stringify(data.user));
                    navigate('/');
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error('Error during login:', error);
            });
    };
    
    

    return (
        <>
        <Navbar />
        <div className="login__dashboard">
            <div className="login__header">
                <img src="images/favicon/favicon.png" alt="logo" />
            </div>
            <form onSubmit={handleSubmit} className="login__form">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
        <Footer />
        </>
    );
}

export default Login;
