import React from 'react'
import './registration.css'
import {useState,setState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login() {

  const form  = useForm();
  const { register } = form;
  
   

  return (
    <>
    <div className="form">
          <div className="form-body">
              
              <div className='header'>
                <h2>Login</h2>
              </div>
              <hr></hr>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" {...register("email")}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" {...register("password")}/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div>
          <hr></hr>
          <div>
            <p>Create Account <Link to="/signup">SignUp</Link></p>
          </div>
      </div>      
    </>
  )
}

export default Login