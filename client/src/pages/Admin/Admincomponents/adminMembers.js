import React, { useEffect, useState } from "react";
import Axios  from "axios";
import New from "./new";
import { NavLink } from "react-router-dom";
import MoreDetails from "./moredetails";



export default function Adminmembers(){

    const[members, setMembers] = useState("");
    const[more, setMore] = useState(false);
    const[userId, setuserId] = useState("");

    // TO MORE DETAILS PROPS
    const[userDetails, setUserDetails]= useState(null)
    const[savingsdetails, setSavingsDetails]= useState(null)
    const[loandetails, setLoanDetails]= useState(null)


    useEffect(() =>{
        Axios.post("http://localhost:3001/admin/adminMembers").then(members =>{
            console.log(members);
            setMembers(members.data[0].User)
            window.localStorage.setItem("allUsers",JSON.stringify(members.data));
        })
    },[])
    // console.log(userId)

    function GetUserDetails(){
        // useEffect(() =>{
            if (userId){
            // Axios.post('http://localhost:3001/admin/adminMembers/moredetails',{
            //     userid:userId
            // }).then(response =>{
                // console.log(response.data)
                ShareUserdetails();
            //     setUserDetails(response.data[0].User)
            //     setSavingsDetails(response.data[1].Savings)
            //     setLoanDetails(response.data[2].loans) 
            
            // })
        }
        else{
            console.log("No user id assigned no axios action executed!");
        }
        // },[])
    }

    function ShareUserdetails(){
        Axios.post('http://localhost:3001/admin/adminMembers/moredetails',{
            userid:userId
        }).then(response =>{
            // console.log(response.data)
            ShareUserdetails();
            setUserDetails(response.data[0].User)
            setSavingsDetails(response.data[1].Savings)
            setLoanDetails(response.data[2].loans) 
            return;
        
        })
    }

    


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
                                // window.location.reload(false);
                                setuserId(member.userId)
                                setMore(true)
                                GetUserDetails();
                                
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
                    userid={userId}
                    userdetails={userDetails}
                    savingsdetails={savingsdetails}
                    loandetails={loandetails}
                /> 
                : null}
        </div>
    )
}