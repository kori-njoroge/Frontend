import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "./adminnav";
import AdminSideBar from "./adminsidebar";
import './admin.css'
import CurrentUser from "../../components/user";
import Adminmembers from "./Admincomponents/adminMembers";



export default function Admin(){
    return(
        <div className="admin-pannel">
            <AdminNav />
            <div className="admin--body">
                <div className="admin--sidebar">
                    <AdminSideBar />
                </div>
                <div className="admin--outlet">
                    <div className="current--user--position">
                    <CurrentUser />
                    </div>
                    {/* <Adminmembers /> */}
                    <hr width="95%" size="2" color="white"/>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}