import React  from "react";
import Axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Evaluation from "./evaluation";
import Link from "../../../components/link";


export default function AppliedLoans(){
    const[loans, setLoans] = useState("");
    const[clickedUserid, setCLickedUserid] = useState(0);
    const[firstnameLoanee, setfirstName] = useState("");
    const[loanAmount, setLoanAMount] = useState("");
    const[loanId, setLoanid] = useState("");
    const[lastnameLoanee, setlastname] = useState("");
    const[duration, setduration] = useState("");
    const[purpose, setpurpose] = useState("");
    const[userloandetails, setUserloandetails] = useState(false)


    useEffect(() =>{
        Axios.post(`${Link}/admin/adminMembers`).then(members =>{
            // console.log(members.data);
            setLoans(members.data[1].Loans)
            window.localStorage.setItem("allUsers",JSON.stringify(members.data));
        })
    },[])



    return(
        <div className="Admin--applied--loans">
            <h3>Applied Loans</h3>
            <table className="admin--members--table">
                    <thead>
                        <tr>
                            <th className="admin--ids">UserId</th>
                            <th className="admin--ids">LoanId</th>
                            <th className="admin--name">Name</th>
                            <th className="admin--ids">Amount(Ksh)</th>
                            <th className="admin--table--big">Purpose</th>
                            <th className="admin--duration">Duration</th>
                            <th className="admin--table--date">Application Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loans ?
                        loans.map(loanee =>(
                        (loanee.firstname === "Admin" ?  "":
                        <tr key={loanee.UserUserId}>
                            <td >{loanee.UserUserId}</td>
                            <td >{loanee.loanId}</td>
                            <td>{loanee.firstname} {loanee.lastname}</td>
                            <td>{loanee.amount}.00</td>
                            <td className="admin--purpose">{loanee.purpose}</td>
                            <td>{loanee.duration}</td>
                            <td>{(loanee.createdAt).split('T')[0]}</td>
                            <td>{loanee.loanStatus}</td>
                            <td><NavLink to={'evaluation'}><button onClick={() =>{
                                setCLickedUserid(loanee.UserUserId)
                                setfirstName(loanee.firstname)
                                setLoanAMount(loanee.amount)
                                setLoanid(loanee.loanId)
                                setlastname(loanee.lastname)
                                setduration(loanee.duration)
                                setpurpose(loanee.purpose)
                                setUserloandetails(true);
                                console.log(clickedUserid);
                                }
                                } 
                                className="reject-approve-btn">Evaluate</button></NavLink></td>
                                
                        </tr>
                    )
                    ))
                    : <tr>"No Loans!"</tr>}
                    </tbody>
                </table>
                {userloandetails ? 
                <Evaluation 
                    userid= {clickedUserid}
                    loanid={loanId}
                    firstname ={firstnameLoanee}
                    lastname ={lastnameLoanee}
                    amount ={loanAmount}
                    duration={duration}
                    purpose={purpose}

                /> : null}
        </div>
    )
}