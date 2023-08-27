import React from 'react'
import './Home.css'
import Adduser from './Adduser'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>          
           <div className='firstpage'> 
           <bold><p>
           "A WMS, or warehouse management system, is software that helps companies manage and control daily warehouse operations, from the moment goods and materials enter a distribution or fulfilment centre until the moment they leave. WMS software systems are a key component of supply chain management and offer real-time visibility into a company’s entire inventory, in warehouses and in transit. In addition to inventory management, a WMS offers tools for picking and packing processes, resource utilisation, analytics, and more."
           </p></bold>

           </div>
           <div>
            <h5>Testing Purpose</h5>
            <Link to="/adduser">Adduser</Link><br></br>
            <Link to="/inbound">Inbound</Link><br></br>
            <Link to="/outbound">Outbound</Link><br></br>
            <Link to='/audit'>Audit</Link><br></br>
            
            <Link to='/auditdash'>Auditor</Link><br></br>
            <Link to='/userdash'>User</Link><br></br>
            <Link to='/addwarehouse'>Addwarehouse</Link><br></br>
            <Link to='/addarea'>AddArea</Link>
            
            
           </div>


           </>
 
  )
}

export default Home