import React from "react"
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom"


import '../styles/navbar.css'
import logo from '../images/logo.jpg'


export default function Navbar() {
    const navigate = useNavigate();

    function Signout(){
        localStorage.clear();
        navigate('/')
        window.location.reload();
}



    return (
        <>
        <nav className="project--nav">
            <i className="fas fa-bars fa-2x" id="bars"></i>
            <img src= {logo} className="nav--icon" alt=" logo" />
            <h3 className="nav--logo_text" >St. Andrews Women Group</h3>
            <NavLink to={"/"}  style={{textDecoration:"none"}} ><h4 className="nav--home">Home</h4></NavLink>
            <NavLink to={'/aboutus'}  style={{textDecoration:"none"}} ><h4 className="nav--aboutus">About us</h4></NavLink>
            <NavLink to={'/contactus'}  style={{textDecoration:"none"}} ><h4 className="nav--title">Contact us</h4></NavLink>
            <NavLink to ={'/profile'}  style={{textDecoration:"none"}} ><h4 className="nav--title"><i className="fa-solid fa-user fa-2x"/></h4></NavLink>
            <button onClick={Signout} ><i className="fa-solid fa-right-from-bracket" id ="logoutIcon"></i></button>
        </nav>
        {/* <NavLink to ={'/signin'}  style={{textDecoration:"none"}} >Log out</NavLink> */}
        </>
    )
}