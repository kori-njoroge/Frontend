import React from "react";
import CurrentUser from "../components/user";
import { NavLink } from "react-router-dom";



export default function Loans(){
    return(
        <div >
        <CurrentUser />
            <h3>My Loans</h3>
            {/* <input type='search'></input> */}
            <table className="loans--table">
                    <thead>
                        <th>Loan Id</th>
                        <th>Amount </th>
                        <th>Payment Status</th>
                        <th>Purpose</th>
                        <th>Date Processed</th>
                        <th>Due Date</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Item No.</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose </td>
                        <td>Purpose </td>
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
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Item No.</td>
                        <td>Amount</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Purpose</td>
                    </tr>
                    </tfoot>
                </table>
            <NavLink to ={"applyloan"}  style={{textDecoration:"none"}} ><h4>Apply Loan</h4></NavLink>
        </div>
    )
}