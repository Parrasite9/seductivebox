import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
