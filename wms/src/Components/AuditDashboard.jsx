import React from 'react';
import { Link } from 'react-router-dom';
import './AuditDashboard.css'; // Import the CSS file for styling

function AuditDashboard() {
  return (
    <div className="audit-dashboard">
      <h1>Welcome, Audit User!</h1>
      <div className="button-container">
        <Link to="/view-inventory" className="dashboard-button">
          View Inventory
        </Link>
        <Link to="/audit" className="dashboard-button">
          Audit
        </Link>
        <Link to="/audit-history" className="dashboard-button">
          Audit History
        </Link>
      </div>
    </div>
  );
}

export default AuditDashboard;
