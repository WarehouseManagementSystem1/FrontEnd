import React, { useState } from "react";
import '../Css/Login.css';


import { useForm } from "react-hook-form";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AuditDashboard from "./AuditDashboard";
import { Link } from "react-router-dom";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectTo, setRedirectTo] = useState(null);
  const[sucess,setsucess] = useState(false);
  const {reset} = useForm();
  var userData;


  const { watch, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const email = watch('email');
    const password = watch('password');


    /* if (user && user.password === data.password) {
       setErrorMessage("");
       setRedirectTo(user.role);
     } else {
       setErrorMessage("Invalid email or password");
     }*/
    localStorage.setItem("email", watch('email'));

    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        userData = await response.json();
        // userData contains userId, username, ownerId, userType, etc.
        console.log(userData);
      localStorage.setItem('warehouseid', userData.warehouseId)
      localStorage.setItem('firstname',userData.firstname)
      localStorage.setItem('lastname',userData.lastname)
      localStorage.setItem('ownerid',userData.ownerid)
      localStorage.setItem('usertype',userData.userType)
      reset();

      if (userData.userType === 'ADMIN') {
        setRedirectTo('admin');
      }
      else if (userData.userType === 'AUDITOR') {
        setRedirectTo('auditor');
      }
      else if (userData.userType === 'USER') {
        setRedirectTo('user');
      }
        //setError(null);
      } 
      else if(response.status === 404) 
      {
        setsucess(true);
        
        console.log(sucess);
        //console.log("ajit");
       
        console.log("Invalid email or password.")

        //setError("Invalid email or password.");
      }
    } catch (error) {
     
      console.error("An error occurred during login:", error);
      //setError("An error occurred during login.");
    }

    

    

    





  };

  return (
    <div className="form-container">

      {redirectTo ? (
        <div className="dashboard-container">
          {redirectTo === "user" && <UserDashboard />}
          {redirectTo === "admin" && <AdminDashboard />}
          {redirectTo === "auditor" && <AuditDashboard />}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h1>Login Form</h1>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error">Email is required</p>}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="error">Password is required</p>}
          </div>
          <button type="submit">Login</button>
          
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <br></br>
          <div>
            {
              sucess ? <div className="fail"><p>Login Fail</p></div>:<div></div>
            }
          </div>
          <div><p>Register New User <Link to="/signup">SignUp</Link></p></div>
        </form>
        
      )}
      
    </div>
  );
};

export default App;
