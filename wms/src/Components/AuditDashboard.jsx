import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/AuditDashboard.css';



const AuditDashboard = () => {
  const first = localStorage.getItem('firstname');
  const last = localStorage.getItem('lastname');
  const email = localStorage.getItem('email');
  const usertype = localStorage.getItem('usertype')
  const logout = () => {
    localStorage.clear();
    

  }
  return (
    <div className="audit-dashboard">
      <h2>Welcome,{first}{last} 
        <p>Email:{email}</p>
        <p>UserType:{usertype}</p>
        </h2>
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