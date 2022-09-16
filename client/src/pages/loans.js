import React from "react";
import CurrentUser from "../components/user";
import { NavLink } from "react-router-dom";



export default function Loans(){
    return(
        <div >
        <CurrentUser />
            <h3>My Loans</h3>
            {/* <input type='search'></input> */}
                        <h4 style={{textDecoration:"underline", margin:"40px"}} >Processed loans</h4>
            <table className="loans--table">
                    <thead>
                        <th>item</th>
                        <th>Loan Id</th>
                        <th>Amount(Ksh)</th>
                        <th>Purpose</th>
                        <th>Date Processed</th>
                        <th>Due Date</th>
                        <th>Payment Status</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>6</td>
                        <td>3000.00</td>
                        <td>Fees</td>
                        <td>01-04-2022 </td>
                        <td>05-07-2022 </td>
                        <td>Completed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>23</td>
                        <td>12000.00</td>
                        <td>Business Capital</td>
                        <td>10-09-2022 </td>
                        <td>15-01-2023 </td>
                        <td>Pending</td>
                    </tr>
                    {/* <tr>
                        <td>Item No.</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    <tr>
                        <td>Item No.</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    <tr>
                        <td>Item No.</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    <tr>
                        <td>Item No.</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    <tr>
                        <td>Item No.</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    <tr>
                        <td>Item No.</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr> */}
                    </tbody>
                    {/* <tfoot>
                    <tr>
                        <td>Item No.</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    </tfoot> */}
                </table>
                <fieldset className="pendingloan--field">
                    <legend style={{textDecoration:"underline"}}>Loan Approved and Disbursed</legend>
                    <table className="pending--loans">
                    <thead>
                        <th>item</th>
                        <th>Loan Id</th>
                        <th>Amount(Ksh)</th>
                        <th>Application Date</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2</td>
                        <td>23</td>
                        <td>12000</td>
                        <td>20-03-2022</td>
                    </tr>
                    </tbody>

                    </table>
                </fieldset>
                <fieldset className="pendingloan--field">
                    <legend style={{textDecoration:"underline"}}>Loans Pending approval</legend>
                    <table className="pending--loans">
                    <thead>
                        <th>item</th>
                        <th>Loan Id</th>
                        <th>Amount(Ksh)</th>
                        <th>Application Date</th>
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