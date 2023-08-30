import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/AdminDashbord.css';
import { useEffect } from 'react';
import Home from './Home';

const AdminDashboard = () => {
  const[enable, setenable ] = useState(false);
  const[ware,setware] = useState(true);
  const email = localStorage.getItem('email');
  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  const usertype = localStorage.getItem('usertype');
 const warehouseid = localStorage.getItem('warehouseid');
    
  
  useEffect(() => {
    
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
  //
  
  return (
    <>
    
    <div className="owner-dashboard">
      <h2>Welcome,{firstname}&nbsp;{lastname}
      <p>Email:{email}</p>
      <p>UserType:{usertype}</p>
      </h2>
      <div className="dashboard-buttons">
        
        {enable ?<Link to="/warehouse" className="btn" style={{pointerEvents:"none"}}>Add Warehouse</Link>:<Link to="/warehouse" className="btn">Add Warehouse</Link>}
        {enable ?<Link to='/addarea' className='btn'>AddArea</Link>:<Link to='/addarea' className='btn' style={{pointerEvents:"none"}}>AddArea</Link>}
        {enable ?<Link to="/adduser" className="btn">Add User</Link>:<Link to="/adduser" className="btn" style={{pointerEvents:"none"}}>Add User</Link>}
        {enable?<Link to="/viewinventory" className="btn">View Inventory</Link>:<Link to="/viewinventory" className="btn" style={{pointerEvents:"none"}}>View Inventory</Link>}
        {enable ?<Link to="/log" className="btn">Log</Link>:<Link to="/log" className="btn"style={{pointerEvents:"none"}}>Log</Link>}
        
        <button  className='btn' onClick={()=>logout()}><Link to="/" className="btn">Logout</Link></button>
        
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;