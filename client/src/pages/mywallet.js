import React, { useState } from "react";
import MpesaPay from "../components/mpesa";
import CurrentUser from "../components/user";


export default function MyWallet(){
    const[transact, setTransact] = useState(false);
    
    function handleTransact(){
        // setTransact(prevState =>!prevState);
        setTransact(true);
    }



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
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>08-02-2022</td>
                        <td>500.00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>08-03-2022</td>
                        <td>500.00</td>
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
                        <th className="savings--grid">LoanId</th>
                        <th className="savings--grid">Date</th>
                        <th className="savings--grid">Amount(ksh)</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>6</td>
                        <td>06-05-2022</td>
                        <td>900.00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>6</td>
                        <td>28-05-2022</td>
                        <td>1000.00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>6</td>
                        <td>20-06-2022</td>
                        <td>1200.00</td>
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