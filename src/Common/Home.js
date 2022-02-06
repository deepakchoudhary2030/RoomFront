import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./css/Home.css";
import Footer from "./Footer"


const Home = () => {
  return <div>
  <Navbar/>

  <div className='main1'>
        <div className='cntnt'>   
        <h3>It's Now Easy to Discover</h3>
        <h3 className='highlight'>ROOMS ON RENT</h3>
        <br />
        <p id='para'>Room Finder is a plateform where you can find Rooms, Hostels, PG nearby your school college and office without any broker.In this plateform you can directly contact with the owners.   </p>
        </div>
  </div>
  <div className='part2'>
      <h2>WHY USE ROOM FINDER</h2>
      <p className='para1'>Room Finder Will help you to discover the best rooms, flats, hostels etc. without any commisions. If you are the owner of any room,  flat, hostel you can also add your property with us. We are providing you the best plateform to fill your vacant property. Room Finder doesn't take Charges anything from you to help. All of your information provided by you will be encrypted.  </p>
  </div>
  <div className="part3">
    <div className='same'>
    <h4>Are you owner ?</h4>
    <p>Upload Your Room to give them on Rent. </p>
    <button className='btnn'>ADD ROOMS</button>
    </div>
    <div className='same'>
    <h4>Looking For a Room ?</h4>
    <p>Discover now the best fit for you.  </p>
    <button className='btnn'>SEARCH ROOMS</button>
    </div>
  </div>
 <Footer/>
  </div>
};

export default Home;
