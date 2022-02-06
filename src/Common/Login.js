import React ,{useContext} from 'react'
// import { Email } from '@material-ui/icons';
// import { Lock } from '@material-ui/icons';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
// import  image3 from "./images/imagelogin.jpg";
import {useState} from "react"
// import { useNavigate } from 'react-router-dom';
import { Visibility } from '@material-ui/icons'
import "./css/Login.css"
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';


const Login = () => {
    const navigate = useNavigate();
    const [eye, setEye]=useState(false);
    const [user , setUser]= useState({email:"" , password:""})

    const showPassword = () =>{
        if(eye){
            setEye(false)
        }else{
            setEye(true)
        }
    }
    let name , value ;
    const handleinput=(e)=>{
        e.preventDefault();
        name = e.target.name ; 
        value = e.target.value ;

        setUser({...user ,[name]:value})
    }

    const getdata =async ()=>{
        const {email , password } = user ;
        const dt = await fetch('http://localhost:5000/owner/login' , {
        headers : {
                "Content-Type" : "application/json"
            } ,
             method : "POST" , 
             credentials : "include",
             body : JSON.stringify({
                 email , password
             })
        }).then((res)=>{
            if(res.status==200){
                alert("Login Successfully");
                navigate("/owner/home");
            }else{
                alert("Invalid Credentials")
            }
        })
    }


    return (
        <div>
        <Navbar/>
        <div className='main'>
       
        <div className='signup'>
        <h2>LOGIN</h2>
        <br/>
        
            {/* <label htmlFor='email' ><Email/></label> */}
            <input className='inp' value={user.email} onChange={handleinput} type="text" name='email'  placeholder='&nbsp; Email' />
            <br />
            {/* <label htmlFor='password' ><Lock/></label> */}
            <input className='inp' value={user.password} onChange={handleinput} type={eye ? "password" : "text"} name='password' placeholder='&nbsp; Password' />
            <span onClick={showPassword}><Visibility/> </span>
            <br />
            <br />
            <div>
                <button onClick={getdata} className='regbtn'>Login</button>
            </div>
        </div>

         <div className='rightdiv'>
         
                {/* <img className='image1' src={image3} alt="Image" /> */}
                <br/>
                <NavLink to="/signup">Create Account </NavLink>
         </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Login
