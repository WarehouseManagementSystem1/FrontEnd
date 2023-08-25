import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashbord.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Welcome, Admin User!</h1>
      <div className="button-container">
        <Link to="/add-user" className="dashboard-button">
          Add User
        </Link>
        <Link to="/add-warehouse" className="dashboard-button">
          Add Warehouse
        </Link>
        <Link to="/inbound" className="dashboard-button">
          Inbound
        </Link>
        <Link to="/outbound" className="dashboard-button">
          Outbound
        </Link>
        <Link to="/view-inventory" className="dashboard-button">
          View Inventory
        </Link>
        <Link to="/audit" className="dashboard-button">
          Audit
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;