import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './Signup';

function Homepage (){
    const [currentPage, setCurrentPage] = useState('home');
    const [username, setUsername] = useState('');
  
    const handleButtonClick = (page, name) => {
      setCurrentPage(page);
      setUsername(name);
    };
  
    const handleLogout = () => {
      setCurrentPage('home');
      setUsername('');
    };
  
    return (
      <div>
        {currentPage === 'home' && (
          <div>
            {username ? (
              <h1>Welcome, {username}!</h1>
            ) : (
              <h1>Welcome to Prepr</h1>
            )}
            {username && <button onClick={handleLogout}>Logout</button>}
            {!username && (
              <div>
                <button onClick={() => handleButtonClick('login', '')}>Login</button>
                <button onClick={() => handleButtonClick('signup', '')}>Sign Up</button>
              </div>
            )}
          </div>
        )}
  
        {currentPage === 'login' && <LoginPage onLogin={handleButtonClick} />}
        {currentPage === 'signup' && <SignUpPage onSignUp={handleButtonClick} />}
      </div>
    );
};
  

export default Homepage