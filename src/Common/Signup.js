import React ,{useContext} from 'react'
// import { Email } from '@material-ui/icons';
// import { Lock } from '@material-ui/icons';
import { Navigate, NavLink } from 'react-router-dom';
// import  image3 from "./images/imagelogin.jpg";
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import { Visibility } from '@material-ui/icons'
import "./css/Login.css"
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';


const Signup = () => {
    const navigate = useNavigate();
    const [eye, setEye]=useState(false);
    const [user , setUser]=useState({
        name : "", 
        email : "",
        phone : "",
        password : "",
        cpassword : "" 

    })
   
    // Password Visiblity
    const showPassword = () =>{
        if(eye){
            setEye(false)
        }else{
            setEye(true)
        }
    }

    // handle input
    let name , value ;
    const handleinput=(e)=>{
        e.preventDefault();
        name = e.target.name ;
        value = e.target.value ;
        
        setUser({...user , [name]:value })
    }

    //  API CALL

    const signuprequest = async()=>{
        const {name , email , phone , password , cpassword}  = user ; 
        const dt = await fetch("http://localhost:5000/owner/register" , {
            headers : {
                "Content-Type" : "application/json", 
                "Access-Control-Allow-Origin": "*"
            },
            credentials : "include" ,
            method : "POST" , 
            body : JSON.stringify( {name , email , phone , password , cpassword})
        }).then((response)=>{
            if(response.status==201){
                alert("Registered Successfully");
                navigate("/login")
            }else{
                alert("Email Already Registered")
            }
        })
    }

    return (
        <div>
        <Navbar />
        <div className='main'>
        <div className='signup'>
        <h2>Register</h2>
        <br/>
        
            <input className='inp' value={user.name} onChange={handleinput} type="text" name='name'  placeholder='&nbsp; Name' />
            <br />
            <input className='inp' value={user.email} onChange={handleinput} type="text" name='email'  placeholder='&nbsp; Email' />
            <br />
            <input className='inp' value={user.phone} onChange={handleinput} type="number" name='phone'  placeholder='&nbsp; Phone' />
            <br />
            <input className='inp' value={user.password} onChange={handleinput} type={eye ? "password" : "text"} name='password' placeholder='&nbsp; Password' />
            <span onClick={showPassword}><Visibility/></span>
            <br />
            <input className='inp' value={user.cpassword} onChange={handleinput} type={eye ? "password" : "text"} name='cpassword' placeholder='&nbsp; Confirm Password' />
            <br />
            <div>
                <button onClick={signuprequest} className='regbtn'>Register</button>
            </div>
        </div>

         <div className='rightdiv'>
         
                {/* <img className='image1' src={image3} alt="Image" /> */}
                <br/>
                <NavLink to="/login"> Login </NavLink>
         </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Signup ; 
