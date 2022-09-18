import  Axios  from "axios";
import React from "react";
import CurrentUser from "../components/user";
import {useEffect,useState } from "react";


export default function Dashboard(){

    const[dashboardInfo, setdashboardInfo] =useState({
        savings:20000,
        contribution:"",
        loanIssued:"",
        loanPayed:"",
        toBePaid:"",
        myLoanLimit:""

    })
    
    useEffect(() =>{
        const currentUserPhoneNumber  = window.localStorage.getItem("phonenumber");
        Axios.post("http://localhost:3001/dashboard/summary" ,{
            UserPhoneNumber: currentUserPhoneNumber}
            ).then(reply =>{
            // console.log(reply.data[0]);
                setdashboardInfo({
                    savings:100,
                    contribution:"",
                    loanIssued:reply.data[0].amount,
                    loanPayed:2000,
                    toBePaid:"",
                    myLoanLimit:""
            
                });
        }).catch(err =>{
            setdashboardInfo(prevState => prevState);
        })
        console.log(currentUserPhoneNumber);
    },[])







    return(
        <>
        <CurrentUser />
        <div className="dashboard">
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total Savings</h4><br />
                <h2 className="card--amount">
                <i className="fa-solid fa-wallet fa-2x"/> Ksh  {dashboardInfo.savings * 1}.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total monthly contribution</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 500.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total Loan Amount Issued</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-money-check-dollar fa-2x"></i> Ksh  {1 * dashboardInfo.loanIssued}.00</h2>
                
            </span>
        </div>
        <fieldset className="LoanCards--field">
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Amount of loan paid</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh { 1* dashboardInfo.loanPayed}.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>Total pending loan amount</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh {dashboardInfo.loanIssued - dashboardInfo.loanPayed}.00</h2>
                
            </span>
            <span className="mycontributions--card">
                <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i>
                <h4>My Loan Limit</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-hand-holding-dollar fa-2x"></i>Ksh {dashboardInfo.savings * 3}.00</h2>
                
            </span>
        </fieldset>
        </>
    )
}