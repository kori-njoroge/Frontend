import React, { useEffect, useState } from "react";
import CurrentUser from "../components/user";


export default function Loans(){

    // const[loanData, setLoanData] = useState({loanData:[]});
    const[userLoan, setUserLoan] = useState("Joaninah");
    // const[userLoan, setUserLoan] = useState({userLoan:[]});
    const[loanAdvice, setLoanAdvice] = useState("");
    // const [rates, setRates] = useState({rates:[]});


    useEffect(() =>{
        const a = (JSON.parse(window.localStorage.getItem("currentUserDetails")));
        if(a){
            setUserLoan(a.ApplyLoan);
        }else{
            // setLoanAdvice("");
        }
        
    },[])
    console.log("***********************");
    console.log(userLoan);
    



    return(
        <div >
        <CurrentUser />
            <h3>My Loans</h3>
            {/* <input type='search'></input> */}
                        <h4 style={{textDecoration:"underline", margin:"40px"}} >Applied loans</h4>
                        {/* <button onClick={userData}>HEAD</button> */}
            <table className="loans--table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Loan Id</th>
                            <th>Amount(Ksh)</th>
                            <th>Purpose</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userLoan.loanId}</td>
                            <td>{userLoan.loanId}</td>
                            <td>{userLoan.amount}</td>
                            <td>{userLoan.purpose}</td>
                            <td>{userLoan.createdAt}</td>
                            <td>Rejected</td>
                        </tr>
                    </tbody>
                </table>
                <fieldset className="pendingloan--field">
                    <legend style={{textDecoration:"underline"}}>Loan Approved and Disbursed</legend>
                    <table className="pending--loans">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Loan Id</th>
                            <th>Amount(Ksh)</th>
                            <th>Application Date</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>23</td>
                        <td>12000</td>
                        <td>20-03-2022</td>
                        <td>InProgress</td>
                    </tr>
                    </tbody>

                    </table>
                </fieldset>
                <fieldset className="pendingloan--field">
                    <legend style={{textDecoration:"underline"}}>Loans Pending approval</legend>
                    <table className="pending--loans">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Loan Id</th>
                            <th>Amount(Ksh)</th>
                            <th>Application Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>

                    </table>
                </fieldset>
                
            {/* <NavLink to ={"applyloan"}  style={{textDecoration:"none"}} ><h4>Apply Loan</h4></NavLink> */}
        </div>
    )
}