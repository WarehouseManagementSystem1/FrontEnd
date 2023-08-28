import React from 'react';
import { Link } from 'react-router-dom';
import './AuditDashboard.css';

const AuditDashboard = () => {
  
  const email = localStorage.getItem('email');
  const logout = () => {
    localStorage.clear();
    

  }
  return (
    <div className="audit-dashboard">
      <h2>Welcome, {email}</h2>
      <div className="dashboard-buttons">
        <Link to="/viewinventory" className="btn">View Inventory</Link>
        <Link to="/audit" className="btn">Audit</Link>
        <Link to="/log" className="btn">Log</Link>
        <button onClick={()=>logout()}><Link to="/" className="btn">Logout</Link></button>
      </div>
    </div>
  );
};

export default AuditDashboard;