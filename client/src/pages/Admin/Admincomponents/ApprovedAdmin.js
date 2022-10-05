import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApprovedLoans(){

    const[approvedloan, setApprovedLoan] = useState()

    useEffect(() =>{
        Axios.post("http://localhost:3001/approvedloans").then(loansapproved =>{
            console.log(loansapproved);
            setApprovedLoan(loansapproved.data)
        })
    },[])

    console.log(approvedloan)

    return(
        <div>
            <h3>Approved Loans</h3>
            <table className="savings--table--admin">
                <tbody>
                    <tr>
                        <th>loanId</th>
                        <th>name</th>
                        <th>amount</th>
                        <th>purpose</th>
                        <th>Duration</th>
                        <th>Application Date</th>
                    </tr>
                    {approvedloan ?
                        approvedloan.map(apploan =>(
                            <tr key={apploan.loanId}>
                                <td>{apploan.loanId}</td>
                                <td>{apploan.firstname} {apploan.lastname}</td>
                                <td>{apploan.amount}</td>
                                <td>{apploan.purpose}</td>
                                <td>{apploan.purpose}</td>
                                <td>{apploan.createdAt}</td>
                            </tr>
                        ))
                    : null}
                </tbody>
            </table>
        </div>
    )
}