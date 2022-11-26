import React from "react";
import { NavLink } from "react-router-dom";


export default function AdminSideBar(){
    return (
        <div className="admin--sideBar">
            <h4>Admin Panel</h4>
            <hr width="90%" size="1" color="white"/>
            <NavLink to={'adminmembers'} style={{textDecoration:"none"}}><h3><i className="fa-solid fa-users"></i>  Members</h3></NavLink>
            {/* <p ><a href="#up" className="sidebar--para" ><i className="fa-solid fa-users"></i> Members</a></p> */}
            <hr width="90%" size="1" color="white"/>
            <NavLink to={'adminsavings'} style={{textDecoration:"none"}} ><h3 ><i className="fa fa-piggy-bank"></i>  Savings</h3></NavLink>
            <hr width="90%" size="1" color="white"/>
            <NavLink to={'appliedloans'} style={{textDecoration:"none"}} ><h3 ><i className="fa-solid fa-hand-holding-dollar"></i>  Applied Loans </h3></NavLink>
            <hr width="90%" size="1" color="white"/>
            <NavLink to={'approvedloans'} style={{textDecoration:"none"}} ><h3 ><i className="fa-solid fa-hand-holding-dollar"></i>  Approved Loans </h3></NavLink>
            <hr width="90%" size="1" color="white"/>
            <NavLink to={'groupaccounts'} style={{textDecoration:"none"}} ><h3 ><i className="fa-solid fa-money-check-dollar"></i>  Group Accounts </h3></NavLink>
            <hr width="90%" size="1" color="white"/>
        </div>
    )
}