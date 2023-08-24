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
      </Routes>
      </div> 
      <Footer />
      </div>
 
   
     
      
     
    
  );
}

export default App;
