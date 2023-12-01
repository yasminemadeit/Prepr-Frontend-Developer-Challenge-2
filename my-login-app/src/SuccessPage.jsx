import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const SuccessPage = ({ user, onLogout }) => (
  <div className='container'>
    <div className="header">
      <div className="text">Success! Welcome, {user.username}!</div>
    </div>
    <div className="submit-container">
    <div className="submit" onClick={onLogout}>Logout</div>
    </div>
   
  </div>
);

export default SuccessPage;