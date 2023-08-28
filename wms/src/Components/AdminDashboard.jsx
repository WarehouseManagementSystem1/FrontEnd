import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/AdminDashbord.css';
import { useEffect } from 'react';
import Home from './Home';

const AdminDashboard = () => {
  const[enable, setenable ] = useState(false);
  const email = localStorage.getItem('email');
  
  
  useEffect(() => {
    const warehouseid = localStorage.getItem('warehouseid');
    console.log(warehouseid);
    
  if(warehouseid >0)
  {
    setenable(true);
  }
  else
  {
    setenable(false);
  }
    
   
  }, []);  
  const logout = () => {
    localStorage.clear();
    
  }
  
  return (
    <>
    
    <div className="owner-dashboard">
      <h2>Welcome, {email}</h2>
      <div className="dashboard-buttons">
        <Link to="/warehouse" className="btn">Add Warehouse</Link>
        {enable ?<Link to="/adduser" className="btn">Add User</Link>:<Link to="/adduser" className="btn" style={{pointerEvents:"none"}}>Add User</Link>}
        <Link to="/viewinventory" className="btn">View Inventory</Link>
        <Link to="/log" className="btn">Log</Link>
        <button  className='btn' onClick={()=>logout()}><Link to="/" className="btn">Logout</Link></button>
        
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;