import React from "react";
import CurrentUser from "../../components/user";
import "./admin.css"
import AppliedLoans from "./Admincomponents/AdminApplied";
import Members from "./Admincomponents/adminMembers";
import { Outlet } from "react-router-dom";


export default function AdminMembers(){
    return (
        <>
        <div className="admin--currentUser" id="up">
        <CurrentUser />
        </div>
        <hr width="90%" size="1" color="white"/>
        <div className="members-section" >
            <p >
                <p className="admin--sections"> Members Pannel   </p>
                {/* <p className="admin--sections"> Members Pannel  <i  id="drop--icon" className="fa fa-chevron-right"></i> </p> */}
            <Members />
            </p>
        </div>
        <div className="Savings">
        </div>
    <hr width="90%" size="1" color="white"/>
    <div className="applied--loansadmin" id="applied--loans">
            <p >
                {/* <p className="admin--sections"> Applied Loans<i  id="drop--icon" className="fa fa-chevron-right"></i> </p> */}
                <p className="admin--sections"> Applied Loans</p>
            <AppliedLoans />
            </p>
        </div>
        <div className="loans--apprvedadmin">
        <p className="admin--sections"> Approved Loans   </p>
            <tr>
                <th className="admin--ids">UserId</th>
                <th className="admin--ids">LoanId</th>
                <th className="admin--name">Name</th>
                <th className="admin--ids">Amount</th>
                <th className="admin--table--big">Purpose</th>
                <th className="admin--duration">Duration</th>
                <th className="admin--table--dae">Application Date</th>
                <th>Status</th>
            </tr>
            <td className="admin--ids">-</td>
                <td className="admin--ids">-</td>
                <td className="admin--name">-</td>
                <td className="admin--ids">-</td>
                <td className="admin--table--big">-</td>
                <td className="admin--duration">-</td>
                <td className="admin--table--dte">-</td>
                <td>Status</td>
        </div>
        <hr width="90%" size="1" color="white"/>
        <div className="loans--disbursedadmin">
        <p className="admin--sections"> Disbursed Loans  </p>
            <tr>
                <th className="admin--ids">UserId</th>
                <th className="admin--ids">LoanId</th>
                <th className="admin--name">Name</th>
                <th className="admin--ids">Amount</th>
                <th className="admin--table--big">Purpose</th>
                <th className="admin--duration">Duration</th>
                <th className="admin--table--dte">Application Date</th>
                <th>Status</th>
            </tr>
            <tr>
                <td className="admin--ids">-</td>
                <td className="admin--ids">-</td>
                <td className="admin--name">-</td>
                <td className="admin--ids">-</td>
                <td className="admin--table--big">-</td>
                <td className="admin--duration">-</td>
                <td className="admin--table--dte">-</td>
                <td>Status</td>
            </tr>
        </div>
        <hr width="90%" size="1" color="white"/>
        <div className="to-be-paid-admin">
        <p className="admin--sections"> Loans Awaiting Payment</p>
            <tr>
                <th className="admin--ids">UserId</th>
                <th className="admin--ids">LoanId</th>
                <th className="admin--name">Name</th>
                <th className="admin--ids">Amount</th>
                <th className="admin--table--big">Purpose</th>
                <th className="admin--duration">Duration</th>
                <th className="admin--table--dte">Application Date</th>
                <th>Status</th>
            </tr>
            <td className="admin--ids">-</td>
                <td className="admin--ids">-</td>
                <td className="admin--name">-</td>
                <td className="admin--ids">-</td>
                <td className="admin--table--big">-</td>
                <td className="admin--duration">-</td>
                <td className="admin--table--dte">-</td>
                <td>Status</td>
        </div>
    <hr width="90%" size="1" color="white"/>
    {/* <a href ="#up">button</a> */}
    </>
    )
}