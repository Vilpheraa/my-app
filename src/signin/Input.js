import React from 'react'
import Button from './Button'
import { FaGoogle } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaAppleAlt} from 'react-icons/fa';


function Input() {
  return (
    <div className='signup-box'>
        <p className='login-head'>  Log in to your Udemy account</p>
        <div className='fa-fa-signin google'><FaGoogle /> Continue with Google</div>
        <div className='fa-fa-signin facebook' > <FaFacebookF /> Continue with facebook</div>
        <div className='fa-fa-signin apple '> <FaAppleAlt /> Continue with Apple</div>
        <input id="textInput" class="custom" size="32" className='signup-input' placeholder='Email'></input>
        <input id="textInput" class="custom" size="32" className='signup-input' placeholder='Password'></input>
        <Button />
        <p className='f-password'>Or <a href='#' className='a-purple'>Forgot Password</a></p>
        <p className='f-class'>Don't have an account? <a href='#'className='a-purple' >Sign up <br></br> Log in with your organization.</a></p>
        
    </div>
  )
}

export default Input