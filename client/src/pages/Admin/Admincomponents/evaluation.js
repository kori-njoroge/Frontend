import  Axios  from "axios";
import React, { useState } from "react";
import Link from "../../../components/link";

export default function Evaluation(props){
    console.log(props.userid)
    const loanID= props.loanid
    const[reply, setReply] = useState('')
    const[loading, setLoading] = useState(false)

    const [evaluationData, setFormData] = React.useState(
        {
            memberage: 'yes', 
            membersavings: 'yes',   
            guarantormembers: 'yes', 
            // selectedtime: "", 
            guarantorsavings: "",
            loanshistory: ""
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

function handleapprove(){
    const a = window.confirm("Confirm Loan Approval!");
    if(a){
        setLoading(true)
        Axios.post(`${Link}/admin/appliedloans/evaluation`,{
            status:"Yaay!",
            loanid:loanID
        }).then(response =>{
            console.log(response);
            setLoading(false)
            setReply(response.data)
            setFormData(
                {
                    memberage: '', 
                    membersavings: '',   
                    guarantormembers: '', 
                    // selectedtime: "", 
                    guarantorsavings: "",
                    loanshistory: ""
                }
            )
        }).catch(err =>{
            console.log(err)
        })
        setFormData(
            {
                memberage: '', 
                membersavings: '',   
                guarantormembers: '', 
                // selectedtime: "", 
                guarantorsavings: "",
                loanshistory: ""
            }
        )
    }else{
        setReply('Process terminated!')
    }
}

function handlerejection(){
    const a = window.confirm("Confirm loan rejection!");
    if(a){
        setLoading(true);
        Axios.post(`${Link}/admin/appliedloans/evaluation`,{
            status:"Boo!",
            loanid:loanID
        }).then(response =>{
            console.log(response);
            setLoading(false)
            setReply(response.data)
            setFormData(
                {
                    memberage: '', 
                    membersavings: '',   
                    guarantormembers: '', 
                    // selectedtime: "", 
                    guarantorsavings: "",
                    loanshistory: ""
                }
            )
        }).catch(err =>{
            console.log(err)
        })
        setFormData(
            {
                memberage: '', 
                membersavings: '',   
                guarantormembers: '', 
                // selectedtime: "", 
                guarantorsavings: "",
                loanshistory: ""
            }
        )
    }else{
        setReply('Process termminated!');
    }
}

if(evaluationData.memberage !== '' && evaluationData.membersavings  !== '' && evaluationData.guarantormembers !== '' && evaluationData.loanshistory !== ''){
if(evaluationData.memberage === 'yes' && evaluationData.membersavings  === 'yes' && evaluationData.guarantormembers === 'yes' && evaluationData.loanshistory === 'yes'){
    handleapprove()
}else{
    handlerejection()
}
}else{

}

    return(
        <div>
            <fieldset className="qualifications">
                <legend> Loan Evaluation Points</legend>
                <ul >
                    {/* <li className="loan--item">You must be a Kenya citizen with verifiable documents.</li> */}
                    {/* <li className="loan--item">You must be an active member of st Andrews Women Group.</li> */}
                    <li className="loan--item">Loan Applicant must be a member of our group for atleast 3months.</li>
                    <li className="loan--item">Loan Applicant must have savings atleast amounting to Ksh.3000.</li>
                    <li className="loan--item">Loan Applicant must have 2 guarantors who must be members of st Andrews Group.</li>
                    <li className="loan--item">The maximum due time for any loan is  12months.</li>
                    <li className="loan--item">Loan guarantors must be members of the group.</li>
                </ul>
            </fieldset>
            <fieldset className="member--inquestion">
                <h4>Loan being evaluated</h4>
                Name: {props.firstname}  {props.lastname}<br/> 
                User Id: {props.userid}<br/>
                Loan Id: {props.loanid}<br/>
                Amount: Ksh.{props.amount}<br/>
                purpose: {props.purpose }<br/>
                Duration: {props.duration}

            </fieldset>
            {/* <form> */}
            <fieldset className="loan--radios">
                <h4>Admin Loan Evaluation</h4>
            <form onSubmit={handleapprove}>
            <ul>
                <li><label htmlFor="memberAge">Is the Applicant atleast 3 months old active members of st Andrews self-help Group?</label></li><br/>
                Yes:
                <input
                id="memberAge"
                type="radio"
                name="memberage"
                value="yes"
                checked={evaluationData.memberage === "yes"}
                onChange={handleChange} 
                required
                /> No:
                <input
                id="memberAge"
                type="radio"
                name="memberage"
                value="no"
                checked={evaluationData.memberage === "no"}
                onChange={handleChange} 
                required
                />
                <br/>
                <br/>
                <li><label htmlFor="memberAge">Does the applicants savings atleast amount to Ksh 3000?</label></li><br/>
                Yes:
                <input
                id="memberAge"
                type="radio"
                name="membersavings"
                value="yes"
                checked={evaluationData.membersavings === "yes"}
                onChange={handleChange} 
                required
                />
                No:
                <input
                id="memberAge"
                type="radio"
                name="membersavings"
                value="no"
                checked={evaluationData.membersavings === "no"}
                onChange={handleChange} 
                required
                />
                <br/>
                <br/>
                <li><label htmlFor="memberAge">Are the loan guarantors members of st Andrews self-help group?</label></li><br/>
                Yes:
                <input
                id="memberAge"
                type="radio"
                name="guarantormembers"
                value="yes"
                checked={evaluationData.guarantormembers === "yes"}
                onChange={handleChange} 
                required
                />
                No:
                <input
                id="memberAge"
                type="radio"
                name="guarantormembers"
                value="no"
                checked={evaluationData.guarantormembers === "no"}
                onChange={handleChange} 
                required
                />
                
                <br/>
                <br/>
                {/* <li><label htmlFor="memberAge">Is the loan amount borrowed repayable in the selected time according to applicants financial history?</label></li><br/>
                Yes:
                <input
                id="memberAge"
                type="radio"
                name="selectedtime"
                value="yes"
                checked={evaluationData.selectedtime === "yes"}
                onChange={handleChange} 
                required
                />
                No:
                <input
                id="memberAge"
                type="radio"
                name="selectedtime"
                value="no"
                checked={evaluationData.selectedtime === "no"}
                onChange={handleChange} 
                required
                />
                <br/>
                <br/> */}
                <li><label htmlFor="memberAge">Do both guarators have savings each amounting to atleast ksh 3000?</label></li><br/>
                Yes:
                <input
                id="memberAge"
                type="radio"
                name="guarantorsavings"
                value="yes"
                checked={evaluationData.guarantorsavings === "yes"}
                onChange={handleChange} 
                required
                />
                No:
                <input
                id="memberAge"
                type="radio"
                name="guarantorsavings"
                value="no"
                checked={evaluationData.guarantorsavings === "no"}
                onChange={handleChange} 
                required
                />
                <br/>
                <br/>
                <li><label htmlFor="payment-history">Do the applicant have a good loan payment history(if any) ?</label></li><br/>
                Yes:
                <input
                id="memberAge"
                type="radio"
                name="loanshistory"
                value="yes"
                checked={evaluationData.loanshistory === "yes"}
                onChange={handleChange} 
                required
                />
                No:
                <input
                id="memberAge"
                type="radio"
                name="loanshistory"
                value="no"
                checked={evaluationData.loanshistory=== "no"}
                onChange={handleChange} 
                required
                />
                <br/>
            </ul>
            <div className="bottom--buttons">
                <button  >Approve</button>
                <button type = 'button' onClick={handlerejection}>Reject</button>
            </div>
            {loading ? <div  className='donut-wrapper'>
                        <div  className='donut multi'></div>
                    </div>
                    : ""}
            {reply? <p className={reply ==='Loan rejected!'?  'error--reply' : 'good--reply' }>{reply}</p> : ''}
            {reply? setTimeout(() => {
                setReply('')
            }, 3000) : ''}
            </form>
            </fieldset>
            {/* </form> */}
        </div>
    )
}