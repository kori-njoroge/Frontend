import React from "react";

export default function AdminSideBar(){
    return (
        <div className="admin--sideBar">
            <h4>Admin Panel</h4>
            <hr width="90%" size="1" color="white"/>
            <p ><a href="#up" className="sidebar--para" ><i className="fa-solid fa-users"></i> Members</a></p>
            <hr width="90%" size="1" color="white"/>
            <p ><a href="#up" className="sidebar--para" ><i className="fa fa-piggy-bank"></i>  Savings</a></p>
            <hr width="90%" size="1" color="white"/>
            <p ><a href="#up" className="sidebar--para" ><i className="fa-solid fa-hand-holding-dollar"></i>  Applied Loans </a></p>
            <hr width="90%" size="1" color="white"/>
            <p ><a href="#up" className="sidebar--para" ><i className="fa-solid fa-users"></i>  Loans Approved</a></p>
            <hr width="90%" size="1" color="white"/>
            <p ><a href="#up" className="sidebar--para" ><i className="fa-solid fa-users"></i>  Loans Disbursed</a></p>
            <hr width="90%" size="1" color="white"/>
            <p ><a href="#up" className="sidebar--para" ><i className="fa-solid fa-users"></i>  Loans to paid</a></p>
            <hr width="90%" size="1" color="white"/>
        </div>
    )
}