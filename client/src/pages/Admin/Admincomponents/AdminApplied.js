import React  from "react";
import Axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Evaluation from "./evaluation";


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
        Axios.post("http://localhost:3001/admin/adminMembers").then(members =>{
            // console.log(members.data);
            setLoans(members.data[1].Loans)
            window.localStorage.setItem("allUsers",JSON.stringify(members.data));
        })
    },[])

    function getConfirmed(){
        
        const confirmation = window.confirm(`Wanna approve the loneth! for ${clickedUserid} amount ${loanAmount}`)
        if(confirmation){
            Axios.get("http://localhost:3001/admin/adminMembers",{
                selectedUserId: clickedUserid
            })
        } else{
            console.log("Iza meehn")
        }
    }


    return(
        <div className="Admin--applied--loans">
            <p>Applied Loans</p>
            <table className="admin--members--table">
                    <thead>
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
                    </thead>
                    <tbody>
                        {loans ?
                        loans.map(loanee =>(
                        (loanee.firstname === "Admin" ?  "":
                        <tr key={loanee.UserUserId}>
                            <td >{loanee.UserUserId}</td>
                            <td >{loanee.loanId}</td>
                            <td>{loanee.firstname} {loanee.lastname}</td>
                            <td>{loanee.amount}</td>
                            <td className="admin--purpose">{loanee.purpose}</td>
                            <td>{loanee.duration}</td>
                            <td>{loanee.createdAt}</td>
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