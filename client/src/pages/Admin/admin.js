import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./adminnav";
import AdminSideBar from "./adminsidebar";
import './admin.css'



export default function Admin(){
    return(
        <div className="admin-pannel">
            <AdminNav />
            <div className="admin--body">
                <div className="admin--sidebar">
                    <AdminSideBar />
                </div>
                <div className="admin--outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}