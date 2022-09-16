import React from "react";
import '../styles/userdashboard.css';


import Sidebar from "./sidebar";
// import Footer from "./footer";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";



export default function UserDashboard(){
    return(
        <>
        <Navbar />
        < div className="user--dashboard">
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="outlets">
            <Outlet />
            </div>
        </div>
        <div  className="footer">
        {/* <Footer /> */}
        
        </div>
        </>
    )
}