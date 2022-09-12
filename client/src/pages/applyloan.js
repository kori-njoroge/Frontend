import React from "react";
import CurrentUser from "../components/user";


export default function ApplyLoan(){
    return(
        <div>
            <CurrentUser />
            <fieldset>
                <legend>Qualifications you should meet to apply for a loan</legend>
                <ul >
                    <li className="loan--item">You must be a Kenya citizen with verifiable documents.</li>
                    <li className="loan--item">You must be an active member of st Andrews Women Group.</li>
                    <li className="loan--item">You must be a member of our group for atleast 3months.</li>
                    <li className="loan--item">You must have shares atleast amounting to Ksh.3000.</li>
                    <li className="loan--item">You must have 2 guarantors who must be members of st Andrews Group.</li>
                    <li className="loan--item">The maximum due time for any loan is  12months.</li>
                    <li className="loan--item">The maximum due time for any loan is  12months.</li>
                </ul>
            </fieldset>
            <form className="form--loan">
                <h4>Fill the form below to apply for a loan</h4>
                <label htmlFor="firstName">First Name*</label>
                <input className="loan--input" id="firstName" type='text' required />
                <label htmlFor="lastName">Last Name*  :    </label>
                <input className="loan--input" id="lastName" type='text' required />
                <br />
                <br />
                <label htmlFor="idNumber">ID Number*</label>
                <input className="loan--input" id="idNumber" type='number' required />
                <label htmlFor="phoneNumber">Phone Number*:</label>
                <input className="loan--input" id="phoneNumber" type='tel' required />
                <br />
                <br />
                <label htmlFor="Amount">Amount*   :  </label>
                <input className="loan--input" id="Amount" type='number' required />
                <br />
                <br />
                <fieldset className="guarantors--section">
                <legend>Input your guarantors details</legend>
                <label htmlFor="firstName">First Name*</label>
                <input className="loan--input" id="firstName" type='text' required />
                <label htmlFor="lastName">Last Name*  :    </label>
                <input className="loan--input" id="lastName" type='text' required />
                <br />
                <br />
                <label htmlFor="idNumber">ID Number*</label>
                <input className="loan--input" id="idNumber" type='number' required />
                <label htmlFor="phoneNumber">Phone Number*:</label>
                </fieldset>
                <button type="button">Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}