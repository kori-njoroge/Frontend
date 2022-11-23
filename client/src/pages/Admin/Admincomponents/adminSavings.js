import React, { useEffect, useState } from "react";
import Axios from "axios";
import Link from "../../../components/link";

export default function AdminSaving(){

    const[memberSavers, setSavers] = useState();

    useEffect(() =>{
        Axios.post(`${Link}/adminsavings`).then(savers =>{
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
                    <th className="date--savings--admin">Name</th>
                    <th>Phone Number</th>
                    <th >Deposit Date</th>
                    <th>Amount(Ksh)</th>
                </tr>
            {memberSavers ?
                memberSavers.map(savee =>(
                    <tr key={savee.savingDepositId}>
                        <td>{savee.UserUserId}</td>
                        <td>{savee.savingDepositId}</td>
                        <td>{savee.UserUserId}</td>
                        <td>{savee.firstname} {savee.lastname}</td>
                        <td>0{savee.phonenumber}</td>
                        <td>{(savee.createdAt).split('T')[0]}</td>
                        <td>{savee.savingsamount}.00</td>
                    </tr>
                ))
            : null}
            </tbody>
            </table>
        </div>
    )
}