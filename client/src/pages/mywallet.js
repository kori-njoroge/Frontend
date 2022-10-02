import React from "react";
import CurrentUser from "../components/user";


export default function MyWallet(){
    return(
        <div>
            <CurrentUser/>
            <div>
                <h3>My contributions</h3><br />
                <fieldset className="mywallet--fields">
                    <legend style={{textDecoration:"underline"}}>Monthly contributions</legend>
                <table>
                    <tbody>
                    <tr>
                        <th>Item No.</th>
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
                    <tr>
                        <td>3</td>
                        <td>08-04-2022</td>
                        <td>500.00</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>08-05-2022</td>
                        <td>500.00</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>08-06-2022</td>
                        <td>500.00</td>
                    </tr>
                    </tbody>
                </table>
                </fieldset>
                <fieldset className="mywallet--fields">
                    <legend style={{textDecoration:"underline"}}>Loan payment deposits</legend>
                <table>
                    <tbody>
                    <tr>
                        <th>Item No.</th>
                        <th>LoanId</th>
                        <th>Date</th>
                        <th>Amount(ksh)</th>
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

            </div>
            
        </div>
    )
}