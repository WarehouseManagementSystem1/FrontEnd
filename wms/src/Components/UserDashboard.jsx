import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/UserDashboard.css';



const UserDashboard = () => {
  const email = localStorage.getItem('email');
  const first = localStorage.getItem('firstname');
  const last = localStorage.getItem('lastname');
  const usertype = localStorage.getItem('usertype');
  const logout = () => {
    localStorage.clear();
    
  }
  return (
    <div className="user-dashboard">
      <h2>Welcome, {first} {last}
          <p>Email:{email}</p>
          <p>UserType:{usertype}</p>
          

      
      </h2>
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
