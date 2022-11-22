import Axios from "axios";
import React, { useEffect, useState } from "react";


export default function MpesaPay(){

        //form 
        const[formData, setFormData] = React.useState(
            {
            phonenumber: "",
            amount: "",
            isChecked:false,
            }
            )
        const[currentUser, setCurrentUser] = useState("")
        const[deposit, setDeposit] = useState(false);
        const[errorMessage, setError] = useState("");
            
        function handleFormData(event){
            const{name, value, type, checked} = event.target
            setFormData(prevFormDate =>{
                return {
                ...prevFormDate,
                [name]: type === "checkbox" ? checked : value
                }
            })
            }
        console.log(formData)
        
        useEffect(() =>{
            setCurrentUser(JSON.parse(window.localStorage.getItem("currentUserDetails")));
        },[])
        console.log(currentUser);
        


            function submitFormData(event){
            event.preventDefault()
            const success = window.confirm("Complete the transaction!")
            if(success){
                Axios.post("http://localhost:3001/mywallet",{
                    firstname:currentUser.firstname,
                    lastname:currentUser.lastname,
                    phonenumber :currentUser.phonenumber,
                    phonepay:formData.phonenumber,
                    amount:formData.amount,
                    purpose:formData.isChecked,
                    userid:currentUser.userId
                }).then(response =>{
                    if(response.data){
                        setDeposit(true);
                        setError(response.data)
                    }
                })
            }
            console.log(formData )
            }
    return(
        <div>
            <h5>Fill the details </h5>
            <form onSubmit={submitFormData}>
                <label className="mpesa--labels" htmlFor="PhoneNumberMpesa">Source of funds(phone Number):</label><br/>
                <input 
                className="amount--phone" 
                type ="tel" 
                placeholder="2547/1xxxxxxxx" 
                id="PhoneNumberMpesa"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleFormData}
                required
                />
                <br/>
                <br/>
                <label
                className="mpesa--labels" htmlFor ="mpesaAmount" >Amount(Ksh):</label><br />
                <input 
                className="amount--phone" 
                name="amount"
                type="number" 
                id="mpesaAmount"
                value ={formData.amount}
                onChange={handleFormData}
                required
                />
                <fieldset className="deposit--purpose">
                    <legend>Purpose</legend>
                    {/* <input 
                        type='radio'
                        name="isChecked"
                        value="Registration Fee"
                        onChange={handleFormData}
                        checked = {formData.isChecked === "Registration Fee"}
                    /> Registration Fee<br/> */}
                    <input 
                        type='radio'
                        name="isChecked"
                        value="Monthly Contribution"
                        onChange={handleFormData}
                        checked ={formData.isChecked === "Monthly Contribution"}
                    /> Monthly Contribution<br/>

                    <input 
                        type='radio'
                        name="isChecked"
                        value="Loan Service Fee"
                        onChange={handleFormData}
                        checked ={formData.isChecked === "Loan Service Fee"}
                    /> Loan Service fee<br/>
                </fieldset>
                <div className="mpesaform--footer">
                    <button 
                    type="button"
                    onClick={() =>{
                        window.alert("Transaction Cancelled!")
                        setFormData({
                            phonenumber: "",
                            amount: "",
                            isChecked:false,
                            });
                    }}
                    >Cancel</button>
                    <button>Confirm</button>
                </div>
            </form>
            {deposit? <p className={errorMessage.length > 25? "invalid" : "valid"}>{errorMessage}</p> : null}
        </div>
    )
}