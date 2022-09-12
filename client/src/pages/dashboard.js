import React from "react";
import CurrentUser from "../components/user";


export default function Dashboard(){
    return(
        <>
        <CurrentUser />
        <div className="dashboard">
            <span className="myLoans--card">Total Contributions</span>
            <span className="mycontributions--card">Total Loans Amount</span>
        </div>
        </>
    )
}