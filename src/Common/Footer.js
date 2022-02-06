import React from 'react';
import "./css/Footer.css"
import facebook from "./icons/facebook.png"
import insta from "./icons/insta.png"
import twitter from './icons/twitter.png';
;


const Footer = () => {
  return <div>

<div className="part4">
    <div>
        <span>Room Finder &copy;</span>
        <span>2022-23</span>
        <p>Designed and Developed in India with 😍 </p>
    </div>
    <div className='social'>
    
        <a href=""><img className='socialicon' src={facebook} alt="" /></a>
        <a href=""><img className='socialicon' src={insta} alt="" /></a>
        <a href=""><img className='socialicon' src={twitter} alt="" /></a>
        
    </div>
  </div>
  </div>;
};

export default Footer;
