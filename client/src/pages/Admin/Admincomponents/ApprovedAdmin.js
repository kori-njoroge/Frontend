import Axios from "axios";
import React, { useEffect, useState } from "react";
import ApiLink from "../../../components/link";

export default function ApprovedLoans(){

    const[approvedloan, setApprovedLoan] = useState()
    const[disbursedLoan, setDisbursedLoan] = useState()
    const[search, setSearch] = useState('')
    const[searchloan, setSearchloan] = useState('')

    useEffect(() =>{
        Axios.post(`${ApiLink}/approvedloans`).then(reply =>{
            console.log(reply.data);
            setApprovedLoan(reply.data[0].reslt)
            setDisbursedLoan(reply.data[1].disbursed)
        })
    },[])

    console.log(approvedloan)

    return(
        <div>
            <h3>Approved Loans</h3>
            <form>
                <input 
                className="search--members" 
                type="text" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}
                placeholder="seach by name"
                />
            </form>
            <table className="approved--loan">
                <tbody><form>
                <input 
                className="search--members" 
                type="text" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}
                placeholder="seach by name"
                />
            </form>
                    <tr>
                        <th>LoanId</th>
                        <th className="date--savings--admin">Name</th>
                        <th>Amount(Ksh)</th>
                        <th className="admin--purpose">Purpose</th>
                        <th>Duration</th>
                        <th>Application Date</th>
                        <th>Status</th>
                    </tr>
                    {approvedloan ?
                        approvedloan.filter(apploan =>{
                            return search.toLowerCase() === ''? apploan : apploan.firstname.toLowerCase().includes(search)
                        }).map(apploan =>(
                            <tr key={apploan.loanId}>
                                <td>{apploan.loanId}</td>
                                <td>{apploan.firstname} {apploan.lastname}</td>
                                <td>{apploan.amount}.00</td>
                                <td>{apploan.purpose}</td>
                                <td>{apploan.duration}</td>
                                <td>{(apploan.createdAt).split('T')[0]}</td>
                                <td>{apploan.loanStatus}</td>
                                <td><button 
                                className="disburse--btn"
                                onClick={() =>{
                                    Axios.post(`${ApiLink}/admin/approvedloans/disburse`,{
                                        loanId:apploan.loanId
                                    }).then(response =>{
                                        console.log(response)
                                    })
                                }}
                                >
                                Disburse
                                </button></td>
                            </tr>
                        ))
                    : "no data"}
                </tbody>
            </table>
            
            <hr width="95%" size="2" color="white"/> 

            <h3>Disbursed Loans</h3>
            {disbursedLoan ?
            <form>
            <input 
            className="search--members" 
            type="text" 
            onChange={(event) =>{
                setSearchloan(event.target.value)
            }}
            placeholder="seach by name"
            />
            </form>
            : ''}
            <table className="approved--loan">
                <tbody>
                    <tr>
                        <th>LoanId</th>
                        <th className="date--savings--admin">Name</th>
                        <th>Amount(Ksh)</th>
                        <th className="admin--purpose">Purpose</th>
                        <th>Duration</th>
                        <th>Application Date</th>
                        <th>Status</th>
                    </tr>
                    {disbursedLoan ?
                        disbursedLoan.filter(apploan =>{
                            return searchloan.toLowerCase() === ''?apploan : apploan.firstname.toLowerCase().includes(searchloan)
                        }).map(apploan =>(
                            <tr key={apploan.loanId}>
                                <td>{apploan.loanId}</td>
                                <td>{apploan.firstname} {apploan.lastname}</td>
                                <td>{apploan.amount}.00</td>
                                <td>{apploan.purpose}</td>
                                <td>{apploan.duration}</td>
                                <td>{(apploan.createdAt).split('T')[0]}</td>
                                <td>{apploan.loanStatus}</td>
                            </tr>
                        ))
                    : <tr><td>"No data"</td></tr>}
                </tbody>
            </table>
        </div>
    )
}