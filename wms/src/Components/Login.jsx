import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from 'react-hook-form';
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AuditDashboard from "./AuditDashboard";
function App() {
  // React States
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uname,setuname] = useState("");
  const [pass,setpass] = useState("");

  const form = useForm();
  const { register, control,formState, watch, reset } = form;

  // User Login info
  const database = [
    {
      username: "chavanajit6282@gmail.com",
      password: "A@jit@777"
    },
    {
      username: "ajitmobile9359277751@gmail.com",
      password: "pass2"
    },
    {
      username: "wms@gmail.com",
      password: "wms@123"
    },
    {
      username:"auditor@gmail.com",
      password:"pass4"
    }
  ];

  const errors = {
    name: "invalid username",
    password: "invalid password"
  };
  const eaddress = watch("name");
  const epassword = watch("password");
  

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    /*try {
      // Make API request to login
      const response = await fetch('your-api-endpoint/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eaddress, epassword }),
      });

      const data = await response.json();

      // Check if the API response contains userType and warehouseId
      if (data.userType && data.warehouseId) {
        onLogin(data.userType, data.warehouseId); // Call the onLogin function with received userType and warehouseId
      } else {
        console.error('Invalid response from the server.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
    localStorage.setItem('userType', data.userType);
    localStorage.setItem('warehouseId', data.warehouseId);
    const usertype = localStorage.getItem('userType');
    const warehouseId = localStorage.getItem('warehouseId');*/


    var { name, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === name.value);
    setuname(name.value);
    setpass(password.value);
    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.name });
    }
    
    console.log(eaddress+"name");
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="name" required id="name" {...register("name")}/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required id="password"{...register("password")} />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <br></br>
        <div>
        <p>Create Account <Link to="/signup">SignUp</Link></p>
        </div>
      </form>
    </div>
  );

  if(isSubmitted && uname == "wms@gmail.com" && pass =="wms@123")
  {
    return (
      <div>
        <UserDashboard/>
      </div>
    );
  }
  else if(isSubmitted && uname == "auditor@gmail.com" && pass =="pass4")  
  {
    return (
      <div>
        <AuditDashboard/>
      </div>
    );
  }
  else
  {
    return (
      <>
      {
        
        isSubmitted ? <AdminDashboard /> : renderForm
      }
      </>
    );
  }
}

export default App;