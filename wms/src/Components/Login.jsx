import React from 'react'
import './registration.css'
import {useState,setState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {

  const form = useForm({
    defaultValues: {
      email: "wms@gmail.com",
      password: "",
      confirmPassword: "",
    },
    mode: "all"
  });
  const { register, control, handleSubmit, formState, watch, reset } = form;
  const { errors, isSubmitting, isSubmitted, isSubmitSuccessful } = formState;
  const handleformsubmit  = (event)=>{
    //event.preventDefault();
  }
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  })
  
   

  return (
    <>
    <div className="form">
    <form onSubmit={handleSubmit(handleformsubmit)} noValidate method='post' action='#'>
          <div className="form-body">
              
              <div className='header'>
                <h2>Login</h2>
              </div>
              <hr></hr>
              <div className="email">
              <label className="form__label" for="email">Email </label>
              <input type="email" name='email' id="email" className="form__input" placeholder="Email" {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required"
                }, pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" || "Enter a diffrent Email Address"
                  );
                },
                
              })} />
            </div>
            <p className='error'>{errors.email?.message}</p>
            <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" type="password" id="password" placeholder="Password" name='password'{...register("password", {
                required: "password is Required"
              })} />
            </div>
            <p className='error'>{errors.password?.message}</p>
            

              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div>
          <hr></hr>
          <div>
            <p>Create Account <Link to="/signup">SignUp</Link></p>
          </div>
      </form>
      </div>      
    </>
  )
}

export default Login