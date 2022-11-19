import React, { useEffect, useState } from "react";
import MpesaPay from "../components/mpesa";
import CurrentUser from "../components/user";


export default function MyWallet(){
    const[transact, setTransact] = useState(false);
    const[userSavings, setSavings] = useState([]);
    const[loanPay, setLoanPay] = useState([]);
    
    function handleTransact(){
        // setTransact(prevState =>!prevState);
        setTransact(true);
    }



useEffect(() =>{
    const a = JSON.parse(window.localStorage.getItem("UserAll"));
    setSavings(a[1].saver);
    setLoanPay(a[2].loanPayer)
    // console.log(userSavings);
},[])

console.log(userSavings);
console.log(loanPay);



    return(
        <div>
            <CurrentUser/>
            <div>
                <div className="mywallet--head">
                <h3 className="contributions--title">My contributions</h3>
                <button className="button--transact" onClick={handleTransact}><h3>Make a transaction  <i className="fa-solid fa-chevron-down"></i></h3></button>
                </div>
                <div className="mywallet">
                <fieldset className="mywallet--fields">
                    <legend style={{textDecoration:"underline"}}>Monthly contributions</legend>
                <table>
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Deposit Date</th>
                        <th>Amount</th>
                        {/* <th>Purpose</th> */}
                    </tr>
                    {userSavings ?
                        userSavings.map(deposit =>(
                            <tr key={deposit.savingDepositId}>
                                <td>{deposit.savingDepositId}</td>
                                <td>{(deposit.createdAt).split('T')[0]}</td>
                                <td>{deposit.savingsamount}</td>
                                {/* <td>{deposit.purpose}</td> */}
                            </tr>
                        ))
                    : null}
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                {/* </fieldset> */}
                {/* <fieldset className="mywallet--fields"> */}
                    <legend style={{textDecoration:"underline"}}>Loan payment deposits</legend>
                <table>
                    <tbody>
                    <tr>
                        <th >#</th>
                        <th className="savings--grid">Deposit Date</th>
                        <th className="savings--grid">Amount(ksh)</th>
                        {/* <th>Purpose</th> */}
                    </tr>
                        {loanPay? 
                        loanPay.map(loanDepo =>(
                            <tr key={loanDepo.savingDepositId}>
                                <td>{loanDepo.savingDepositId}</td>
                                <td>{(loanDepo.createdAt).split('T')[0]}</td>
                                <td>{loanDepo.savingsamount}</td>
                                {/* <td>{loanDepo.purpose}</td> */}
                            </tr>
                        ))
                        : null}
                        <tr>
                        <td></td>
                        <td>Total</td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
                </fieldset>
                {transact ? 
                <fieldset className="mpesa--field">
                    <legend>Mpesa Transaction</legend>
                <MpesaPay /> 
                </fieldset>
                : null}
                </div>
            </div>
            
        </div>
    )
}