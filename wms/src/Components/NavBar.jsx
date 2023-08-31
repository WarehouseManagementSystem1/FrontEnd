import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '../App.css';
import '../Css/NavBar.css';


import logoo from './wmsLogo.jpg';

function NavBar() {
  // <h3 className='logo'>WMS</h3>
    const[isMobile,setIsMobile] = useState(false);
  return (
    <>
     <Nav className = "navbar">
     < div className="logo">
      <img src={logoo} alt="Logo" />
      </div>
        <ul className={isMobile ? "nav-links-mobile":"nav-links"} onClick={()=>setIsMobile(false)}>
            <Link to="/" className='home'><li>Home</li></Link>
            <Link to="/hiw" className='hiw'><li>How It Works</li></Link>
            <Link to="/htu" className='htu'><li>How to Use</li></Link>
            <Link to="/about" className='about'><li>About Us</li></Link>
            <Link to="/login" className='login'><li>Login</li></Link>
            <Link to="/signup" className='signup'><li>SignUp</li></Link>


        </ul>
        <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ?<i className='fas fa-times'></i>:<i className='fas fa-bars'></i>}
        </button>

     </Nav>
    
    
    </>
  )
}

export default NavBar