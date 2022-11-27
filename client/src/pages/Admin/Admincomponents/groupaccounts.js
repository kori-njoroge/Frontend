import React, { useEffect, useState } from "react";
import Axios from "axios";
import ApiLink from "../../../components/link";


export default function GroupAccounts(){
    const[regAccount, setRegAccount] = useState("");
    const[totalSavings, setTotalSavings] = useState("");
    const[totalLoanIssued, setLoanIssued] = useState("");
    const[totalLoanPaid, setLoanPaid] = useState("");
    const[showBalance1,setShowBalance1] = useState(true);
    const[showBalance2,setShowBalance2] = useState(true);
    const[showBalance3,setShowBalance3] = useState(true);
    const[showBalance4,setShowBalance4] = useState(true);

useEffect(() =>{
    Axios.post(`${ApiLink}/admin/groupaccounts`, ).then( response =>{
        console.log(response.data)
        // console.log(response.data[0].TotalSavings[0].total)
        setTotalSavings(response.data[0].TotalSavings[0].total)
        setLoanIssued(response.data[1].loanIssued[0].total)
        setLoanPaid(response.data[2].LoanPaid[0].total)
        setRegAccount(response.data[3].regAccount[0])
    })

},[])




    return(
        <div className="group--account">
        <div className="admin--cards">
            <h3>Total Savings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i 
            id={showBalance1? "eye--accounts" : ""}  
            onClick={() =>{
                setShowBalance1(prevState => !prevState)
            }} 
            className="fas fa-eye"></i></h3>
            <br/>
            
            <p 
            id={showBalance1? "": "total--value"}
            className="total--balance"
            >
            Ksh:{totalSavings ? totalSavings : 0}.00</p>
        </div>
        <div className="admin--cards">
            <h3>Total Loan Issued&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i 
            id={showBalance2? "eye--accounts" : ""}  
            onClick={() =>{
                setShowBalance2(prevState => !prevState)
            }} 
            className="fas fa-eye"></i></h3>
            <br/>

            <p 
            id={showBalance2? "": "total--value"}
            className="total--balance"
            >
            Ksh:{totalLoanIssued ? totalLoanIssued : 0}.00</p>   
        </div>
        <div className="admin--cards">
            <h3>Total Loan Paid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i 
                id={showBalance3? "eye--accounts" : ""} 
                onClick={() =>{
                    setShowBalance3(prevState => !prevState)
                }}
                className="fas fa-eye"></i></h3>
                <br />

            <p 
            id={showBalance3? "": "total--value"}
            className="total--balance"
            >
            Ksh:{totalLoanPaid ? totalLoanPaid : 0}.00</p>  
        </div>
        <div className="admin--cards">
            <h3>Registrations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i
                id={showBalance4? "eye--accounts" : ""} 
                onClick={() =>{
                    setShowBalance4(prevState => !prevState)
                }}
                className="fas fa-eye"></i>
                <p></p>
                Account
                </h3>
                
                {/* <br /> */}
            <p 
            id={showBalance4? "": "total--value"}
            className="total--balance"
            >
            Ksh:{regAccount? regAccount : 0}.00</p>  
        </div>
        </div>
    )
}