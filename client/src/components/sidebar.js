import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import '../styles/sidebar.css'


export default function Sidebar(){
    const navigate = useNavigate();

function Signout(){
        localStorage.clear();
        navigate('/')
        window.location.reload();
}





    return(
        <div className="sidebar">
            <h3>Services</h3>
            <br />
            

            <NavLink to ={"summary"}  style={{textDecoration:"none"}} ><h4><i className="fa-solid fa-layer-group"></i>  Dashboard</h4></NavLink>
            <NavLink to ={"mywallet"}   style={{textDecoration:"none"}} ><h4><i className="fa-solid fa-wallet"></i>  My Wallet</h4></NavLink>
            <NavLink to ={"applyloan"}  style={{textDecoration:"none"}} ><h4><i className="fa-solid fa-hand-holding-dollar"></i>  Apply Loan</h4></NavLink>
            <NavLink to ={"myloans"}    style={{textDecoration:"none"}} ><h4><i className="fa-solid fa-money-check-dollar"></i>  My Loans</h4></NavLink>
            <NavLink to ={"members"}    style={{textDecoration:"none"}} ><h4><i className="fa-solid fa-users"></i>  Members</h4></NavLink>
            <NavLink to ={"settings"}   style={{textDecoration:"none"}} ><h4><i className="fas fa-cogs"></i>  Settings</h4></NavLink>
            <button onClick={Signout}>Log out  <i className="fa-solid fa-right-from-bracket" id ="logoutIcon"></i></button>
        </div>
    )
}