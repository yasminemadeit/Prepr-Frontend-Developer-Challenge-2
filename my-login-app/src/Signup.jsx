import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import user_icon from './assets/user-icon.png';
import password_icon from './assets/password-icon.png';
import email_icon from './assets/email-icon.png';



function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleRegistration = () => {
    // Perform registration logic here
    // For simplicity, just navigate to login after registration
    navigate('/login');
  };
    return(
        

        <div className='container'>
                <div className= 'header'>
                    <div className="text">Sign Up</div>
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
                <div className="dropdown-container">
                <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>User Type</div>
            {isActive && (
                <div className="dropdown-content">
                <div className="dropdown-item">
                    Learner
                </div>
                <div className="dropdown-item">
                    Job Seeker
                </div>
                <div className="dropdown-item">
                    Employer
                </div>
            </div>
            )}
        </div>
        
            </div>
            
            
               
                <div className="submit-container">
                    <div className="submit" onClick={handleRegistration}>Sign Up</div>
                </div>
                <div className="bottom-container">
                    <div className="or-text">or</div>
                </div>
                <div className="bottom-container">
                    <div className="google-button">Sign Up with Google</div>
                    </div>
               
        </div>
    );
}

export default Signup