import React from "react"
import {NavLink} from 'react-router-dom'


import '../styles/navbar.css'
import logo from '../images/logo.jpg'


export default function Navbar() {
    return (
        <nav>
            <i className="fas fa-bars fa-2x" id="bars"></i>
            <img src= {logo} className="nav--icon" alt=" logo" />
            <h3 className="nav--logo_text" >St. Andrews Group</h3>
            <NavLink to={"/"}><h4 className="nav--home">Home</h4></NavLink>
            <NavLink to={'/Aboutus'}><h4 className="nav--aboutus">About us</h4></NavLink>
            <NavLink to={'/Contactus'}><h4 className="nav--title">Contact us</h4></NavLink>
            <NavLink to ={'/signin'}><h4 className="nav--title"> Sign In</h4></NavLink>
            <NavLink to={'/signup'}><h4 className="nav--title">Sign Up</h4></NavLink>
        </nav>
    )
}