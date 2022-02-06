import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';
import "./css/About.css"
import img1 from "./images/formalphoto.jpeg"


const About = () => {
  return <div>
      <Navbar/>
  <div className='abt1'>
  <h2>ABOUT US</h2>
  <br />
  <p>The Room Finder Team is an group of Students who want to solve the real world problems which student oand employees face when they visit diffrent cities. We are trying to provide an plateform which can be helpfull foor many employees and students.</p>
  <p>Room Finder Will help you to discover the best rooms, flats, hostels etc. without any commisions. If you are the owner of any room,  flat, hostel you can also add your property with us. We are providing you the best plateform to fill your vacant property. Room Finder doesn't take Charges anything from you to help. All of your information provided by you will be encrypted. </p>
  <br />
  </div>
  <div className="abt2">
  <div>
  <img className='img'  src={img1} alt="Team" />
  <h4>Rohit Sahu</h4>
  </div>
  <div>
  <img className='img'  src={img1} alt="Team" />
  <h4>Rohit Sahu</h4>
  </div>
  <div>
  <img className='img'  src={img1} alt="Team" />
  <h4>Rohit Sahu</h4>
  </div>
  

  </div>
      <Footer/>
  </div>;
};

export default About;
