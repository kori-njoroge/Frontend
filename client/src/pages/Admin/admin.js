import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./adminnav";
import AdminSideBar from "./adminsidebar";
import './admin.css'
import Adminmembers from "./Admincomponents/adminMembers";
import CurrentAdminUser from "./Admincomponents/adminuser";



export default function Admin(){
    return(
        <div className="admin-pannel">
            <AdminNav />
            <div className="admin--body">
                <div className="admin--sidebar">
                    <AdminSideBar />
                </div>
                <div className="admin--outlet">
                    <div className="curret--user--position">
                    <CurrentAdminUser />
                    </div>
                    {/* <Adminmembers /> */}
                    <hr width="95%" size="2" color="white"/>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}