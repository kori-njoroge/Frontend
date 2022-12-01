import  Axios  from "axios";
import React from "react";
import CurrentUser from "../components/user";
import {useEffect,useState } from "react";
import ApiLink from '../components/link'



export default function Dashboard(){

    const[dashboardInfo, setdashboardInfo] =useState({
        savings:"",
        contribution:"",
        loanIssued:"",
        loanPayed:"",
        toBePaid:"",
        myLoanLimit:""

    })
    
    useEffect(() =>{
        const currentUserPhoneNumber  = window.localStorage.getItem("phonenumber");
        Axios.post(`${ApiLink}/dashboard/summary` ,{
            UserPhoneNumber: currentUserPhoneNumber}
            ).then(reply =>{
                console.log(reply.data);
                const loaner= reply.data[0].loaner[0]
                const saver = reply.data[1].saver
                const loanpaid = reply.data[2].loanPayer[0].total
                const total = reply.data[3].total[0].total
                window.localStorage.setItem(JSON.stringify("loaner",loaner));
                setdashboardInfo({
                    savings:`${total ? total : 0}`,
                    loanIssued:`${loaner ? loaner.amount : 0}`,
                    loanPayed:`${loanpaid ? loanpaid : 0}`,
                })
                

        }).catch(err =>{
            setdashboardInfo(prevState => prevState);
        })
    },[])

    console.log("savings",dashboardInfo.savings);
    console.log("Dashbaordinfo",dashboardInfo)






    return(
        <>
        <CurrentUser />
        <div className="dashboard">
            <span className="mycontributions--card">
                {/* <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i> */}
                <h4>Total Savings</h4><br />
                <h2 className="card--amount">
                <i className="fa-solid fa-wallet fa-2x"/> Ksh  {dashboardInfo.savings ? dashboardInfo.savings : 0}.00</h2>
                
            </span>
            <span className="mycontributions--card">
                {/* <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i> */}
                <h4>Total monthly contribution</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 500.00</h2>
                
            </span>
            <span className="mycontributions--card">
                {/* <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i> */}
                <h4>Total Loan Amount Issued</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-money-check-dollar fa-2x"></i> Ksh  {1 * dashboardInfo.loanIssued}.00</h2>
                
            </span>
        </div>
        <fieldset className="LoanCards--field">
            <span className="mycontributions--card">
                {/* <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i> */}
                <h4>Amount of loan paid</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh { 1* dashboardInfo.loanPayed}.00</h2>
                
            </span>
            <span className="mycontributions--card">
                {/* <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i> */}
                <h4>Total pending loan amount</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh {dashboardInfo.loanIssued - dashboardInfo.loanPayed}.00</h2>
                
            </span>
            <span className="mycontributions--card">
                {/* <i  id ="eye"className="fa fa-eye" aria-hidden="true"></i> */}
                <h4>My Loan Limit</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-hand-holding-dollar fa-2x"></i>Ksh {dashboardInfo.savings * 3}.00</h2>
                
            </span>
        </fieldset>
        </>
    )
}