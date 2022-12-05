import  Axios  from "axios";
import React from "react";
import CurrentUser from "../components/user";
import {useEffect,useState } from "react";
import ApiLink from '../components/link'

// import MyChatComponent from '../components/chat'


import logo from '../images/user.png';


export default function Dashboard(){

    const[dashboardInfo, setdashboardInfo] =useState({
        savings:"",
        contribution:"",
        loanIssued:"",
        loanPayed:"",
        toBePaid:"",
        myLoanLimit:"",
        interest: ''

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
                // console.log(total)
                setdashboardInfo({
                    savings:`${total ? total : 0}`,
                    loanIssued:`${loaner ? loaner.amount : 0}`,
                    loanPayed:`${loanpaid ? loanpaid : 0}`,
                    interest:`${loaner ? loaner.interest : ''}`,
                })
                
                window.localStorage.setItem(JSON.stringify("loaner",loaner));

        }).catch(err =>{
            setdashboardInfo(prevState => prevState);
        })
    },[])

    console.log("savings",dashboardInfo.savings);
    console.log("Dashbaordinfo",dashboardInfo)






    return(
        <>
        <CurrentUser />   
        {/* {loading ? <div  className='donut-wrapper'>
                        <div  className='donut multi'></div>
                    </div>
                    : ""}      */}
        <div>

            <div className="dashcards--all">
                <div className="dash--cards" >
                <h4>Total Savings</h4><br />
                <h2 className="card--amount">
                <i className="fa-solid fa-wallet fa-2x"/> Ksh  {dashboardInfo.savings ? dashboardInfo.savings : 0}.00</h2>
                </div>

                <div className="dash--cards" >
                <h4>Total monthly contribution</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh 500.00</h2>
                </div>

                <div className="dash--cards" >
                <h4>Total Loan Amount Issued</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-money-check-dollar fa-2x"></i> Ksh  {1 * dashboardInfo.loanIssued}.00<br />
                {dashboardInfo.interest?  <small className="interest--section"><i>interest({dashboardInfo.interest})</i></small> : '' }</h2>
                </div>
            </div>


            <div className="dashcards--all">
                <div className="dash--cards" >
                <h4>Amount of loan paid</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh { 1* dashboardInfo.loanPayed}.00</h2>
                </div>
                
                <div className="dash--cards" >
                <h4>Total pending loan amount</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-wallet fa-2x"/> Ksh {dashboardInfo.loanIssued - dashboardInfo.loanPayed +  Number(dashboardInfo.interest)}.00</h2>
                </div>

                <div className="dash--cards" >
                <h4>My Loan Limit</h4><br />
                <h2 className="card--amount"><i className="fa-solid fa-hand-holding-dollar fa-2x"></i>Ksh {dashboardInfo.savings * 3}.00</h2>
                </div>
            </div>
        </div>
        </>
    )
}