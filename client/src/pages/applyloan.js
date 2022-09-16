import React from "react";
import { useState } from "react";
import Axios from 'axios'
import CurrentUser from "../components/user";


export default function ApplyLoan(){



    const[applicationformData, setApplicationformData] = useState(
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


        function handlesChangeAppLoan(event){
            const{name, value} = event.target;
            setApplicationformData(prevAppData =>{
                return {
                    ...prevAppData,
                [name]:value
            }
        })
        }


        
        function submitloanData(event){
            event.preventDefault();
            Axios.post('http://localhost:3001/applyloan',
            {
                
                firstName:applicationformData.firstName,
                lastName:applicationformData.lastName,
                IDnumber:applicationformData.IDnumber,
                phonenumber:applicationformData.phonenumber,
                amount:applicationformData.amount,
                duration:applicationformData.duration,
                purpose:applicationformData.purpose,
                g1firstName:applicationformData.g1firstName,
                g1lastName:applicationformData.g1lastName,
                g1IDnumber:applicationformData.g1IDnumber,
                g1phoneNumber:applicationformData.g1phoneNumber,
                g2firstName:applicationformData.g2firstName,
                g2lastName:applicationformData.g2lastName,
                g2IDnumber:applicationformData.g2IDnumber,
                g2phoneNumber:applicationformData.g2phoneNumber
            }
            )
    //         <p class="company-industry">
    //         <a innerHTML="text"
    //         href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to={{approvedApplicantDetails.email}}&su=Congratulations! You have been approved for the {{internshipDetails.internshipTitle}} by {{internshipDetails.companyName}}&body=Hello {{approvedApplicantDetails.name}},We extend our heartiest congratulations and best wishes to you for being shortlisted for the internship : {{internshipDetails.internshipTitle}}. {{internshipDetails.companyName}} had received many applications, out of which only a few were shortlisted based on the Applicant letter sent via Intern Finder system website. {{internshipDetails.companyName}} is very honored to welcome you under our roof for an internship. Your Resume enlightens the person within you very accurately. It is compact, solid, and robust. We are very impressed with the application letter you wrote. You are the ideal intern we are looking for. {{internshipDetails.internshipTitle}} has always been an epitome of success, fame, and producing the best-skilled personnel for the country. It is a great choice you have made for an internship in your domain. It has a lot to yield to you. We hope this internship with us will be a fruitful and rewarding one for you. We wish you all the success. Welcome to the world of {{internshipDetails.companyName}}."
    //         target="_blank"><small>(Send approval mail)</small></a>


    // </p>
            // alert("Loan application successful!") 
        }


        const handleConfirm = () =>{

            
                const confirmBox = window.confirm(
                "Confirm to finish loan application!"
                )
                if (confirmBox === true) {
                    submitloanData();
                    window.alert("Application Successful");
                }else{
                    handlecancelLoan();
                    window.alert("Application Aborted");
                
            }
        }

        function handlecancelLoan(){
            
            setApplicationformData(
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
        }

    return(
        <div>
            <CurrentUser />
            <fieldset className="qualifications">
                <legend>Qualifications you should meet to apply for a loan</legend>
                <ul >
                    <li className="loan--item">You must be a Kenya citizen with verifiable documents.</li>
                    <li className="loan--item">You must be an active member of st Andrews Women Group.</li>
                    <li className="loan--item">You must be a member of our group for atleast 3months.</li>
                    <li className="loan--item">You must have shares atleast amounting to Ksh.3000.</li>
                    <li className="loan--item">You must have 2 guarantors who must be members of st Andrews Group.</li>
                    <li className="loan--item">The maximum due time for any loan is  12months.</li>
                </ul>
            </fieldset>
            <form className="form--loan" onSubmit={submitloanData}>
                <h4>Fill the form below to apply for a loan</h4>
                <fieldset className="details">
                <legend>Personal details</legend>
                <label htmlFor="firstName">First Name*</label>
                <input 
                className="loan--input" 
                id="firstName" 
                type='text'
                name="firstName"
                value={applicationformData.firstName}
                onChange={handlesChangeAppLoan}
                required 
                />


                <label htmlFor="lastName">Last Name*  :    </label>
                <input 
                className="loan--input" 
                id="lastName" 
                type='text' 
                name="lastName"
                value={applicationformData.lastName}
                onChange={handlesChangeAppLoan}
                required 
                />
                <br />
                <br />
                <label htmlFor="idNumber" >ID Number*</label>
                <input 
                className="loan--input" 
                id="idNumber" 
                type='number' 
                name="IDnumber"
                value={applicationformData.IDnumber}
                onChange={handlesChangeAppLoan}
                min="0"
                required 
                />

                <label htmlFor="phoneNumber">Phone Number*:</label>
                <input 
                className="loan--input" 
                id="phoneNumber" 
                type='tel' 
                name="phonenumber"
                min="0"
                value={applicationformData.phonenumber}
                onChange={handlesChangeAppLoan}
                required
                />

                <br />
                <br />
                </fieldset>
                <fieldset className="loan--details">
                    <legend>Loan Details</legend>
                    <label htmlFor="Amount">Amount*   :  </label>
                    <input 
                    className="loan--input" 
                    id="Amount" 
                    type='number'
                    name="amount"
                    value={applicationformData.amount}
                    onChange={handlesChangeAppLoan} 
                    required
                    />

                    <label>Payment duration: </label>
                    <select
                        name="duration"
                        value={applicationformData.duration}
                        onChange={handlesChangeAppLoan}
                    >
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="9 months">9 months</option>
                        <option value="12months">12 months</option>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="loanPurpose">Purpose for loan application:</label><br />
                    <textarea 
                    id="loanPurpose"  
                    className="loan--purpose" 
                    maxLength="500" 
                    name="purpose"
                    value={applicationformData.purpose}
                    onChange={handlesChangeAppLoan} 
                    required
                    />

                </fieldset>
                <br />
                <br />
                <fieldset className="guarantors--section">
                    <legend>Input your guarantors details</legend>
                    <h4>Guarantor 1:</h4>
                    <label htmlFor="g1firstName">First Name*</label>
                    <input 
                    className="loan--input" 
                    id="g1firstName" 
                    type='text' 
                    name="g1firstName"
                    value={applicationformData.g1firstName}
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <label htmlFor="g1lastName">Last Name*  :    </label>
                    <input 
                    className="loan--input" 
                    id="g1lastName" 
                    type='text' 
                    name="g1lastName"
                    value={applicationformData.g1lastName}
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <br />
                    <br />
                    <label htmlFor="g1idNumber">ID Number*</label>
                    <input 
                    className="loan--input" 
                    id="g1idNumber" 
                    type='number' 
                    name="g1IDnumber"
                    value={applicationformData.g1IDnumber}
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <label htmlFor="g1phoneNumber">Phone Number*:</label>
                    <input 
                    className="loan--input" 
                    id="g1phoneNumber" 
                    type='tel' 
                    name="g1phoneNumber"
                    value={applicationformData.g1phoneNumber}
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <br />
                    <br />

                    <h4>Guarantor 2:</h4>
                    <label htmlFor="g2firstName">First Name*</label>
                    <input 
                    className="loan--input" 
                    id="g2firstName" 
                    type='text'
                    name="g2firstName"
                    value={applicationformData.g2firstName}
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <label htmlFor="g2lastName">Last Name*  :    </label>
                    <input 
                    className="loan--input" 
                    id="g2lastName" 
                    type='text'
                    name="g2lastName"
                    value={applicationformData.g2lastName}
                    onChange={handlesChangeAppLoan}  
                    required
                    />

                    <br />
                    <br />
                    <label htmlFor="g2idNumber">ID Number*</label>
                    <input 
                    className="loan--input" 
                    id="g2idNumber" 
                    type='number' 
                    name="g2IDnumber"
                    value={applicationformData.g2IDnumber}
                    onChange={handlesChangeAppLoan} 
                    required
                    />

                    <label htmlFor="g2phoneNumber">Phone Number*:</label>
                    <input 
                    className="loan--input" 
                    id="g2phoneNumber" 
                    type='tel'
                    name="g2phoneNumber"
                    value={applicationformData.g2phoneNumber}
                    onChange={handlesChangeAppLoan} 
                    required
                    />

                    <br />
                    <br />
                </fieldset>
                {/* <button type="button" onClick={handlecancelLoan}>Cancel</button> */}
                {/* <button type="button" onClick={submit}>Cancel</button>
                 */}
                
                <button 
                type="button"
                    onClick={handleConfirm}>
                Cancel
                </button>
                <button>Submit</button>
            </form>
        </div>
    )
}