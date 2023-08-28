import React, { useState } from "react";
import '../Css/Login.css';


import { useForm } from "react-hook-form";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import AuditDashboard from "./AuditDashboard";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectTo, setRedirectTo] = useState(null);

  const database = [
    {
      email: "user@example.com",
      password: "password",
      role: "user",
    },
    {
      email: "admin@example.com",
      password: "adminpassword",
      role: "admin",
    },
    {
      email: "auditor@example.com",
      password: "auditorpassword",
      role: "auditor",
      
    },
    {
      email: "chavanajit6282@gmail.com",
      password: "A@jit@777",
      role: "admin",
      
    },
    
  ];

  const { watch , register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const user = database.find((user) => user.email === data.email);

    if (user && user.password === data.password) {
      setErrorMessage("");
      setRedirectTo(user.role);
    } else {
      setErrorMessage("Invalid email or password");
    }
    localStorage.setItem("email", watch('email'));

    /**try {
      const response = await fetch("your-api-endpoint/login", {
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
        const userData = await response.json();
        // userData contains userId, username, ownerId, userType, etc.
        console.log(userData);
        setError(null);
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setError("An error occurred during login.");
     }

     const email = watch('email');
     const password = watch('password');
     if(email != userData.email || password != userData.password)
     {
      alert('Invalid email or password');
      
     }
     else
     {
      
      
      if(userData.userType === 'Admin') {
        setRedirectTo('admin');
      }
      else if(userData.userType === 'Auditor') {
        setRedirectTo('auditor');
      }
      else if(userData.userType === 'User') {
        setRedirectTo('user');
      }

      
     }
     
     
     
     
     */
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
        </form>
      )}
    </div>
  );
};

export default App;
