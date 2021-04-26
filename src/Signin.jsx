import React from 'react';
import {NavLink} from 'react-router-dom';
import './Signin.css';

const Signin = () =>{
return(
  <>
  <div className="b1">
    <div className="nav1"> 
      <p className="logo">NETFLIX</p>
    </div>
    <br />
    <div className="form">
      <div className="form1">
        <h1>Sign in</h1>
        <br />
        <input type="text" placeholder="Email or Phone Number" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button>Sign In</button>
        <br />
        <p>Login With Facebook</p>
        <br />
          <span>New To Netflix?
          <NavLink to="/in" style={{color : 'white', textDecoration : 'none'}}>Sign up now</NavLink></span>
          <br />
          <p style={{fontSize : '14px'}}>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="#">Learn more.</a></p>
      </div>
    </div>
    <br />
    <br />
    <div className="footer" >
    <p>Questions?<a href="#"> Call 000-800-040-4015</a></p>
    <br />
    <div className="row">
      <div className="column">    
    <a href="#">FAQ</a>
    <br />
    <a href="#">Cookie Preferences</a>
    <br />
      </div>
      <div className="column">    
    <a href="#">Help Center</a>
    <br />
    <a href="#">Corporate Informations</a>
    <br />
      </div>
      <div className="column">    
    <a href="#">Terms of use</a>
      </div>
      <div className="column">    
    <a href="#">Privacy</a>
      </div>
    </div>
    <br />
    <select>
            <option> English</option>
            <option>हिंदी</option>
    </select>
  </div>
  </div>
  </>
)
}
export default Signin;