// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Registration from './Signup';
import Login from './LoginPage';
import SuccessPage from './SuccessPage';
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Simulate successful login
    setUser(userData);
  };

  const handleLogout = () => {
    // Simulate logout
    setUser(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/success"
            element={user ? <SuccessPage user={user} onLogout={handleLogout} /> : <Navigate to="/" />}
          />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = ({ user }) => (
  <div className='container'>
    <div className="header">
      <div className="text">Welcome to Prepr</div>
    </div>

    {user && (
      
      <div className="text-2">You are logged in as: {user.username}</div>
    )}
  </div>
);

export default App;