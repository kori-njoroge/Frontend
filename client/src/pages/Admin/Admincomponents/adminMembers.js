import React, { useEffect, useState } from "react";
import Axios  from "axios";
// import New from "./new";
import { NavLink } from "react-router-dom";
import MoreDetails from "./moredetails";
import Link from "../../../components/link";



export default function Adminmembers(){

    const[members, setMembers] = useState("");
    const[more, setMore] = useState(false);

    // TO MORE DETAILS PROPS
    const[userDetails, setUserDetails]= useState(null)
    const[savingsdetails, setSavingsDetails]= useState(null)
    const[loandetails, setLoanDetails]= useState(null)
    const[savingsTotal, setsavingsTotal]= useState(null)


    useEffect(() =>{
        Axios.post(`${Link}/admin/adminMembers`).then(members =>{
            console.log(members);
            setMembers(members.data[0].User)
            window.localStorage.setItem("allUsers",JSON.stringify(members.data));
        })
    },[])


    return(
        <div >
            <table className="admin--members--table">
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th className="admin--table--head">First Name</th>
                            <th className="admin--table--head">Last Name</th>
                            <th className="admin--table--head">Phone Number</th>
                            <th className="admin--table--head">IDnumber</th>
                            <th className="admin--email">Email</th>
                            <th className="admin--table--dte">Joining Date</th>
                            {/* <th className="button--moredetails"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {members?
                        members.map(member =>(
                            (member.firstname === "Admin" ?  "":
                        <tr key={member.userId}>
                            <td>{member.userId}</td>
                            <td>{member.firstname}</td>
                            <td>{member.lastname}</td>
                            <td>0{member.phonenumber}</td>
                            <td>{member.IDnumber}</td>
                            <td>{member.email}</td>
                            <td>{(member.createdAt).split('T')[0]}</td>
                            <td className="button--moredetails"><NavLink to={'moredetails'}><button 
                            onClick={() =>{
                                setMore(true);
                                Axios.post(`${Link}/admin/adminMembers/moredetails`,{
                                    userid:member.userId
                                }).then(response =>{
                                    console.log(response.data)
                                    setUserDetails(response.data[0].User)
                                    setSavingsDetails(response.data[1].Savings)
                                    setLoanDetails(response.data[2].loans)
                                    if(response.data[3].total[0].total){
                                        setsavingsTotal(response.data[3].total[0].total)
                                    }else{
                                        setsavingsTotal(0);
                                    }
                                })
                            }} 
                            className="admin--btn"
                            >More Details</button></NavLink></td>
                            {/* <td cla.split('T')[0]ssName="button--moredetails"><button onClick={Guesswho} className="admin--btn">More<i className="fa fa-chevron-right" id="more--info--icon"></i> <i className="fa fa-chevron-right" id="more--info--icon"></i>Details</button></td> */}
                        </tr>
                    )
                    ))
                    : ""}
                    </tbody>
                </table>
                {more ? 
                <MoreDetails  
                    userdetails={userDetails}
                    savingsdetails={savingsdetails}
                    loandetails={loandetails}
                    savingsTotal={savingsTotal}
                /> 
                : null}
        </div>
    )
}