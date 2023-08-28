import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Routes,Route } from 'react-router-dom';
import HowItWorks from './Components/HowItWorks';
import HowToUse from './Components/HowToUse';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Adduser from './Components/Adduser';
import Inbound from './Components/Inbound';
import Outbound from './Components/Outbound';
import Audit from './Components/Audit';
import AdminDashboard from './Components/AdminDashboard';
import AuditDashboard from './Components/AuditDashboard';
import UserDashboard from './Components/UserDashboard';
import Warehouse from './Components/Warehouse';
import AddArea from './Components/AddArea';
import ViewInventory from './Components/ViewInventory';
import Log from './Components/Log';







function App() {
  return (
    
       <div className='page-container'>
      <div className='content-wrap'>     
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/hiw" Component={HowItWorks}></Route>
        <Route path="/htu"Component={HowToUse}></Route>
        <Route path="/about" Component={AboutUs}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/adduser" Component={Adduser}></Route>
        <Route path="/inbound" Component={Inbound}></Route>
        <Route path="/outbound" Component={Outbound}></Route>
        <Route path="/audit" Component={Audit}></Route>
        <Route path="/admin" Component={AdminDashboard}></Route>
        <Route path="/auditdash" Component={AuditDashboard}></Route>
        <Route path="/userdash" Component={UserDashboard}></Route>
        <Route path="/warehouse" Component={Warehouse}></Route>
        <Route path="/addarea" Component={AddArea}></Route>
        <Route path="/viewinventory" Component={ViewInventory}></Route>
        <Route path="/log" Component={Log}></Route>
        
        
        
        
      </Routes>
      </div> 
      <Footer />
      </div>
 
   
     
      
     
    
  );
}

export default App;
