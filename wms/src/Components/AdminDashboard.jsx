import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashbord.css';

const OwnerDashboard = () => {
  return (
    <div className="owner-dashboard">
      <h2>Welcome, Admin User!</h2>
      <div className="dashboard-buttons">
        <Link to="/adduser" className="btn">Add User</Link>
        <Link to="/addwarehouse" className="btn">Add Warehouse</Link>
        <Link to="/viewinventory" className="btn">View Inventory</Link>
        <Link to="/log" className="btn">Log</Link>
      </div>
    </div>
  );
};

export default OwnerDashboard;