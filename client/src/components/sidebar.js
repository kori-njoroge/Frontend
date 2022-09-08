import React from "react";
import '../styles/sidebar.css'


export default function Sidebar(){
    function handleClick(){
        alert('I was clicked')
    }
    return(
        <div className="sidebar">
            <h3>Search Menu</h3>
            <br />
            <h4 onClick={handleClick}>Dashboard</h4>
            <h4 onClick={handleClick}>My Wallet</h4>
            <h4 onClick={handleClick}>My Loans</h4>
            <h4 onClick={handleClick}>Apply Loan</h4>
            <h4 onClick={handleClick}>Members</h4>
            <h4 onClick={handleClick}>Settings</h4>
            <h4 onClick={handleClick}>Dashboard</h4>
            <h4 onClick={handleClick}>Dashboard</h4>
            <h4 onClick={handleClick}>Dashboard</h4>
        </div>
    )
}