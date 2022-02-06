import React, { useState } from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom"
import About from '../Common/About';
import Home from '../Common/Home';
import Popup from '../Popup/Popup';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }




    return <div>

        <nav className="abc navbar navbar-expand-lg navbar-dark ">
            <a className="navbar-brand" href="#"><h4>ROOM FINDER</h4></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/user/signup">User</Link></li>
                            <li><a className="dropdown-item" href="/signup">Owner</a></li>
                        </ul>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About Us </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link active" onClick={togglePopup}>LogIn</p>
                    </li>
                </ul>

            </div>
        </nav>
        {isOpen && <Popup
            content={<div>
                <b>Choose Your Login </b><br />
                <Link to="/user/login" style={{ textDecoration: 'none' }}><button className="btn btn-success" type="submit" >User Login</button></Link>
                <Link to="/login" style={{ textDecoration: 'none' }}><button className="btn btn-primary my-3 mx-3" type="submit" >Owner Login</button></Link>
            </div>}
            handleClose={togglePopup}
        />}

    </div>;
};

export default Navbar;
