import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const email = localStorage.getItem('email');
  const logout = () => {
    localStorage.clear();
    
  }
  return (
    <div className="user-dashboard">
      <h2>Welcome, {email}</h2>
      <div className="dashboard-buttons">
        <Link to="/viewinventory" className="btn">View Inventory</Link>
        <Link to="/inbound" className="btn">Inbound</Link>
        <Link to="/outbound" className="btn">Outbound</Link>
        <Link to="/log" className="btn">Log</Link>
        <button onClick={()=>logout()}><Link to="/" className="btn">Logout</Link></button>
      </div>
    </div>
  );
};

export default UserDashboard;
