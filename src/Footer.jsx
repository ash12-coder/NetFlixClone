import React from 'react';
import './Footer.css';

const Footer = () =>{
return(
  <>
  <div className="footer">
    <p>Questions?<a href="#"> Call 000-800-040-4015</a></p>
    <br />
    <div className="row">
      <div className="column">    
    <a href="#">FAQ</a>
    <br />
    <a href="#">Invester Relations</a>
    <br />
    <a href="#">Privacy</a>
    <br />
    <a href="#">Speed Test</a>
      </div>
      <div className="column">    
    <a href="#">Help Center</a>
    <br />
    <a href="#">Jobs</a>
    <br />
    <a href="#">Cookie Preferences</a>
    <br />
    <a href="#">Legal Notices</a>
      </div>
      <div className="column">    
    <a href="#">Account</a>
    <br />
    <a href="#">Ways to Watch</a>
    <br />
    <a href="#">Corporate Informations</a>
    <br />
    <a href="#">netflix originals</a>
      </div>
      <div className="column">    
    <a href="#">Medta Center</a>
    <br />
    <a href="#">Terms of Use</a>
    <br />
    <a href="#">Contact Us</a>
      </div>
    </div>
    <br />
    <select>
            <option> English</option>
            <option>हिंदी</option>
    </select>
    <br />
    <p>Netflix India</p>
  </div>
  </>
)
}
export default Footer;