import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import user_icon from './assets/user-icon.png'
import password_icon from './assets/password-icon.png'
import email_icon from './assets/email-icon.png'



const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, just simulate a successful login and pass user data to the parent
    const userData = { username };
    onLogin(userData);
    navigate('/success');
  };

  return (
    <div className='container'>
    <div className= 'header'>
        <div className="text">Log In</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="" style={{width:'24px', height:'24px',}} />
            <input type="text" placeholder="Username"  value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input">
            <img src={email_icon} alt="" style={{width:'24px', height:'24px',}}/>
            <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" style={{width:'24px', height:'24px',}} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
    
    </div>
   
    <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Log In</div>
    </div>
    <div className="bottom-container">
        <div className="or-text">or</div>
    </div>
    <div className="bottom-container">
        <div className="google-button">Log In with Google</div>
        </div>
   
</div>
  );
};

export default Login;