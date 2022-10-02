import React from "react";
import CurrentUser from "../../components/user";
import "./admin.css"
import AppliedLoans from "./Admincomponents/AdminApplied";
import Members from "./Admincomponents/adminMembers";

export default function AdminMembers(){
    return (
        <>
        <div className="admin--currentUser" id="up">
        <CurrentUser />
        </div>
        <hr width="90%" size="1" color="white"/>
        <div className="members-section" >
            <p >
                <p className="admin--sections"> Members Pannel  <i  id="drop--icon" className="fa fa-chevron-right"></i> </p>
            <Members />
            </p>
        </div>
        <div className="Savings">
        </div>
    <hr width="90%" size="1" color="white"/>
    <div className="applied--loansadmin" id="applied--loans">
            <p >
                <p className="admin--sections"> Applied Loans<i  id="drop--icon" className="fa fa-chevron-right"></i> </p>
            <AppliedLoans />
            </p>
        </div>
        <div className="loans--approvedadmin">
            <p>Approved Loans</p> <br/>
        </div>
        <hr width="90%" size="1" color="white"/>
        <div className="loans--disbursedadmin">
            <p>Disbursed Loans</p> <br/>
        </div>
        <hr width="90%" size="1" color="white"/>
        <div className="to-be-paid-admin">
            <p>Approved disbursed awaiting payment</p> <br/>
        </div>
    <hr width="90%" size="1" color="white"/>
    <a href ="#up">button</a>
    </>
    )
}