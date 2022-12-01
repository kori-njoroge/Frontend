import React, { useEffect, useState } from "react";
import MpesaPay from "../components/mpesa";
import CurrentUser from "../components/user";

////////
import { Bar } from "react-chartjs-2";



import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import Axios  from "axios";
import ApiLink from "../components/link";
ChartJS.register(...registerables);





export default function MyWallet(){
    const[transact, setTransact] = useState(false);
    const[userSavings, setSavings] = useState([]);
    const[loanPay, setLoanPay] = useState([]);
    const[total, setTotal]= useState("");
    const[loantotal, setLoanTotal]= useState("");

    
    function handleTransact(){
        // setTransact(prevState =>!prevState);
        setTransact(prevState => !prevState);
    }



useEffect(() =>{
    const a = JSON.parse(window.localStorage.getItem("userId"));
    Axios.post(`${ApiLink}/mywallet`,{
        userId: a
    }).then(reply =>{
        console.log(reply.data);
        setTotal(reply.data[0].total[0].total)
        setSavings(reply.data[1].saver);
        setLoanTotal(reply.data[2].loantotal[0].total)
        setLoanPay(reply.data[3].loanPayer)
    })
    // console.log(userSavings);
},[])

// console.log(userSavings);
console.log(total);



    return(
        <div>
            <CurrentUser/>
            <div>
                <div className="mywallet--head">
                <h3 className="contributions--title">My contributions</h3>
                <button className="button--transact" onClick={handleTransact}><h3>Make a transaction  {transact? <i className="fa-solid fa-chevron-right"></i> : <i className="fa-solid fa-chevron-down"></i>}</h3></button>
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
                                {/* <td> */}
                                    {/* <button
                                    onClick={() =>{
                                                <Bar
                                                  data={{
                                                    // Name of the variables on x-axies for each bar
                                                    labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
                                                    datasets: [
                                                      {
                                                        // Label for bars
                                                        label: "total count/value",
                                                        // Data or value of your each variable
                                                        data: [200,200, 10, 10],
                                                        // Color of each bar
                                                        backgroundColor: ["aqua", "green", "red", "yellow"],
                                                        // Border color of each bar
                                                        borderColor: ["aqua", "green", "red", "yellow"],
                                                        borderWidth: 0.2,
                                                      },
                                                    ],
                                                  }}
                                                  // Height of graph
                                                  height={200}
                                                  options={{
                                                    maintainAspectRatio: false,
                                                    responsive:false,
                                                    scales: {
                                                      yAxes: [
                                                        {
                                                          ticks: {
                                                            // The y-axis value will start from zero
                                                            beginAtZero: false,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    legend: {
                                                      labels: {
                                                        fontSize: 15,
                                                      },
                                                    },
                                                  }}
                                                />
                                              
                                    }}       
                                    >Bar chart</button>
                                </td> */}
                            </tr>
                        ))
                    : null}
                    <tr>
                        <td></td>
                        <td><b>Total</b></td>
                        <td><b>{total? total : 0}.00</b></td>
                    </tr>
                    </tbody>
                </table>




            <h1>My savings Bar chart </h1>
      <div style={{ maxWidth: "100px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["Median", "Mean", "Lowest", "Highest"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [1000,20, 1, 3000],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.2,
              },
            ],
          }}    
          // Height of graph
          height={200}
          options={{
            maintainAspectRatio: false,
            responsive:false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: false,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>






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
                        <td><b>Total</b></td>
                        <td><b>{loantotal? loantotal : 0}.00</b></td>
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