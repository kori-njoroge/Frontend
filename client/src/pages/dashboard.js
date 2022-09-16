import React, { useState } from "react";
import CurrentUser from "../components/user";
import { Axios } from "axios";


export default function Dashboard(){
    const[loanDetails, setloanDetails] = useState(
        {
            firstName:"",
            lastName:"",
            IDnumber:"",
            phonenumber:"",
            amount:"",
            duration:"3 months",
            purpose:"",
            g1firstName:"",
            g1lastName:"",
            g1IDnumber:"",
            g1phoneNumber:"",
            g2firstName:"",
            g2lastName:"",
            g2IDnumber:"",
            g2phoneNumber:""
        }
    )


    function SigninFunc(event){
        event.preventDefault();
        Axios.post('http://localhost:3001/dashboard',
        {   
            firstName:loanDetails.firstName
        }).then(response =>{
            
                console.log(response.data.message)
            }
        );
    }




    return(
        <>
        <CurrentUser />
        <button onClick={SigninFunc}>Haroo</button>
        <div className="dashboard">
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total Savings</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 30000.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total Contribution in the month</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 500.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total Loan Amount</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-money-check-dollar fa-2x"></i> Ksh 12000.00</h2>
                
            </span>
        </div>
        <fieldset className="LoanCards--field">
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total pending loan amount</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 12000.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Amount of loan paid</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 6000.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Loans awaiting approval</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-hand-holding-dollar fa-2x"></i> Ksh 0.00</h2>
                
            </span>
        </fieldset>
        </>
    )
}