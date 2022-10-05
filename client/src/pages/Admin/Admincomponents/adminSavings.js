import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function AdminSaving(){

    const[memberSavers, setSavers] = useState();

    useEffect(() =>{
        Axios.post('http://localhost:3001/adminsavings').then(savers =>{
            // console.log(savers.data);
            if(savers){
                setSavers(savers.data)
            }else{
                console.log("Sorry No Savers!")
            }
        })
    },[2])
    // console.log(memberSavers);

    return(
        <div>
            <h3>Savings</h3>
            <table className="savings--table--admin">
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Deposit Id</th>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th className="date--savings--admin">Date made</th>
                    <th>Amount</th>
                </tr>
            {memberSavers ?
                memberSavers.map(savee =>(
                    <tr key={savee.savingDepositId}>
                        <td>{savee.savingDepositId}</td>
                        <td>{savee.savingDepositId}</td>
                        <td>{savee.UserUserId}</td>
                        <td>{savee.firstname} {savee.lastname}</td>
                        <td>{savee.phonenumber}</td>
                        <td>{savee.createdAt}</td>
                        <td>{savee.savingsamount}</td>
                    </tr>
                ))
            : null}
            </tbody>
            </table>
        </div>
    )
}