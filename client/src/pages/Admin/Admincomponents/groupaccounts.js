import React, { useEffect, useState } from "react";
import Axios from "axios";
import ApiLink from "../../../components/link";


export default function GroupAccounts(){
    const[regAccount, setRegAccount] = useState("");
    const[totalSavings, setTotalSavings] = useState("");
    const[totalLoanIssued, setLoanIssued] = useState("");

useEffect(() =>{
    Axios.post(`${ApiLink}/admin/groupaccounts`, ).then( response =>{
        console.log(response.data[0].total)
        setTotalSavings(response.data[0].total)
    })

},[])



    return(
        <div className="group--account">
        <div className="admin--cards">
            <h3>Total Savings</h3>
            <br/>
            Ksh:{totalSavings}
        </div>
        <div className="admin--cards">
        </div>
        <div className="admin--cards">
        </div>
        <div className="admin--cards">
        </div>
        </div>
    )
}