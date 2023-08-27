import React from 'react';
import { Link } from 'react-router-dom';
import './AuditDashboard.css';

const AuditDashboard = () => {
  return (
    <div className="audit-dashboard">
      <h2>Welcome, Audit User!</h2>
      <div className="dashboard-buttons">
        <Link to="/viewinventory" className="btn">View Inventory</Link>
        <Link to="/audit" className="btn">Audit</Link>
        <Link to="/log" className="btn">Log</Link>
      </div>
    </div>
  );
};

export default AuditDashboard;