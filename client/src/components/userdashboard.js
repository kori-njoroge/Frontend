import React from "react";
import '../styles/userdashboard.css';


import Sidebar from "./sidebar";
import Upperoutlet from "./upperoutlet";
import Loweroutlet from "./loweroutlet";
import Footer from "./footer";


export default function UserDashboard(){
    return(
        <>
        < div className="user--dashboard">
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="outlets">
            <Upperoutlet/>
            <Loweroutlet/>
            </div>
        </div>
        <div  className="footer">
        <Footer />
        </div>
        </>
    )
}