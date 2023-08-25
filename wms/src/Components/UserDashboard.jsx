import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css'; // Import the CSS file for styling

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <h1>Welcome, User!</h1>
      <div className="button-container">
        <Link to="/view-inventory" className="dashboard-button">
          View Inventory
        </Link>
        <Link to="/inbound" className="dashboard-button">
          Inbound
        </Link>
        <Link to="/outbound" className="dashboard-button">
          Outbound
        </Link>
        <Link to="/transaction-history" className="dashboard-button">
          Transaction History
        </Link>
      </div>
    </div>
  );
}

export default UserDashboard;