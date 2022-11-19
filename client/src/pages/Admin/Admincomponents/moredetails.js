import  Axios  from "axios";
import React, { useEffect, useState } from "react";

export default function MoreDetails(props){
    const[savingsData,setSavingsData] = useState("");
    const[loanData,setloanData]= useState("");
    const[user, setUser] = useState("");
    
    console.log("props",props.userid)
    console.log("props",props.userdetails)
    console.log("props",props.savingsdetails)
    console.log("props",props.loandetails)


    // useEffect(() =>{
    //     Axios.post('http://localhost:3001/admin/adminMembers/moredetails',{
    //         userid:props.userid
    //     }).then(response =>{
    //         console.log(response.data)
    //         setUser(response.data[0].User);
    //         setSavingsData(response.data[1].Savings);
    //         setloanData(response.data[2].loans);
    //     })
    // },[])

    return(
        <div>
            <hr width="95%" size="2" color="white"/>
            <h2>More Details</h2>
            <fieldset>
                <legend>Contact Details</legend>
                <table className="admin--members--table">
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th >First Name</th>
                            <th >Last Name</th>
                            <th >Phone Number</th>
                            <th >IDnumber</th>
                            <th className="admin--email">Email</th>
                            <th >Joining Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?
                        user.map(member =>(
                            (member.firstname === "Admin" ?  "":
                        <tr key={member.userId}>
                            <td>{member.userId}</td>
                            <td>{member.firstname}</td>
                            <td>{member.lastname}</td>
                            <td>0{member.phonenumber}</td>
                            <td>{member.IDnumber}</td>
                            <td>{member.email}</td>
                            <td>{(member.createdAt).split('T')[0]}</td>
                        </tr>
                    )
                    ))
                    : ""}
                    </tbody>
                </table>
            </fieldset>
            {/* <hr width="95%" size="2" color="white"/> */}
            <fieldset>
                <legend>Savings Details</legend>
                <table className="admin--memers--table">
                    <thead>
                    <tr>
                    {/* <th>#</th> */}
                    <th>Deposit Id</th>
                    <th >Deposit Date</th>
                    <th>Amount(Ksh)</th>
                </tr>
                    </thead>
                    <tbody>
                        {savingsData.length > 0?
                        savingsData.map(savee =>(
                            (savee.firstname === "Admin" ?  "":
                            <tr key={savee.savingDepositId}>
                            <td>{savee.savingDepositId}</td>
                            <td>{(savee.createdAt).split('T')[0]}</td>
                            <td>{savee.savingsamount}.00</td>
                        </tr>
                    )
                    ))
                    : "No savings"}
                    </tbody>
                </table>
            </fieldset>
            {/* <hr width="95%" size="2" color="white"/> */}
            <fieldset>
                <legend>Loans Details</legend>
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
                        {loanData.length > 0?
                        loanData.map(loanee =>(
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
                        </tr>
                    )
                    ))
                    : "No loans!"}
                    </tbody>
                </table>
            </fieldset>
            <hr width="95%" size="2" color="white"/>
        </div>
    )
}