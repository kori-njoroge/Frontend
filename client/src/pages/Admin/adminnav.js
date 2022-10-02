import React from "react"
import { useNavigate } from "react-router-dom"


// import '../styles/navbar.css'

// import logo from '../images/logo.jpg'
import logo from '../../images/logo.jpg'


export default function AdminNav() {
    const navigate = useNavigate();

    function Signout(){
        localStorage.clear();
        navigate('/')
        window.location.reload();
}



    return (
        <>
        <nav className="admin--nav">
            <img src= {logo} className="nav--icon" alt=" logo" />
            <h3 className="nav--logo_text" >St. Andrews Women Group</h3>
            <button onClick={Signout} ><i className="fa-solid fa-right-from-bracket fa-2x" id ="logoutIcon"></i></button>
        </nav>
        {/* <NavLink to ={'/signin'}  style={{textDecoration:"none"}} >Log out</NavLink> */}
        </>
    )
}