import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import '../styles/sidebar.css'


export default function Sidebar(){
    const navigate = useNavigate();

function Signout(){
    localStorage.clear();
    // if(window.localStorage=== ""){
        navigate('/')
        // window.location.reload();
    // }
}


    return(
        <div className="sidebar">
            <h3>Services</h3>
            <br />
            <NavLink to ={"summary"}  style={{textDecoration:"none"}} ><h4>Dashboard</h4></NavLink>
            <NavLink to ={"mywallet"}   style={{textDecoration:"none"}} ><h4>My Wallet</h4></NavLink>
            <NavLink to ={"myloans"}    style={{textDecoration:"none"}} ><h4>My Loans</h4></NavLink>
            <NavLink to ={"applyloan"}  style={{textDecoration:"none"}} ><h4>Apply Loan</h4></NavLink>
            <NavLink to ={"members"}    style={{textDecoration:"none"}} ><h4>Members</h4></NavLink>
            <NavLink to ={"settings"}   style={{textDecoration:"none"}} ><h4>Settings</h4></NavLink>
            <button onClick={Signout}>Log out</button>
        </div>
    )
}