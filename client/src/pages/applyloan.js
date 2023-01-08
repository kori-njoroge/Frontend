import React, { useEffect } from "react";
import { useState } from "react";
import Axios from 'axios'
import CurrentUser from "../components/user";
import ApiLink from "../components/link";


export default function ApplyLoan(){

    //User details fill
    const[search, setSearch] = useState('')
    const userDetails = JSON.parse(window.localStorage.getItem("currentUserDetails"));
    console.log(userDetails);
    console.log(userDetails.firstname);
    const username = window.localStorage.getItem("username")

    const[applicationformData, setApplicationformData] = useState(
        {
            firstName:"",
            lastName:"",
            IDnumber:"",
            phonenumber:"",
            amount:'',
            duration:'3months',
            purpose:"",
            g1search:'',
            g1firstName:"",
            g1lastName:"",
            g1phoneNumber:"",
            g2search:'',
            g2firstName:"",
            g2lastName:"",
            g2phoneNumber:"",
            interest:""
        }
        )
        const[g1name, setG1name] = useState()
        const[g1lname, setG1lname] = useState()
        const[g1phone, setG1phone] = useState()

        const[g2name, setG2name] = useState()
        const[g2lname, setG2lname] = useState()
        const[g2phone, setG2phone] = useState()

        const[wrongAmount, setWrong]= useState(false);
        const[members, setMembers]= useState("");
        const[breakcondition,setbreakcondition] =useState(false)
        const[breakcondition2,setbreakcondition2] =useState(false)

        useEffect( () =>{
            const k = JSON.parse(window.localStorage.getItem("AllMembers"));
            setMembers(k);
        },[])


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
                if((applicationformData.g1phoneNumber=== userDetails.phonenumber) || (applicationformData.g2phoneNumber=== userDetails.phonenumber)){
                    window.alert("You cant be your own Guarantor!")
                    
                }else{
                
                if (applicationformData.amount > 500000 || applicationformData.amount <= 0) {
                    window.alert('Invalid amount!')
                    }else if(g1phone === g2phone){
                        window.alert('Please check guarator details!')
                    }else{
                    const confirmBox = window.confirm(
                        "Confirm Loan application!"
                        )
                    if(confirmBox === true){
                    Axios.post(`${ApiLink}/applyloan`,
                    {
                        
                        firstName:userDetails.firstname,
                        lastName:userDetails.lastname,
                        IDnumber:userDetails.IDnumber,
                        phonenumber:userDetails.phonenumber,
                        amount:applicationformData.amount,
                        duration:applicationformData.duration,
                        purpose:applicationformData.purpose,
                        g1firstName:applicationformData.g1search? applicationformData.g1search.split(' ')[0]: '' ,
                        g1lastName:applicationformData.g1search? applicationformData.g1search.split(' ')[1]: '' ,
                        g1phoneNumber:applicationformData.g1search? applicationformData.g1search.split(' ')[2]: '' ,
                        g2firstName:applicationformData.g2search? applicationformData.g2search.split(' ')[0]: '' ,
                        g2lastName:applicationformData.g2search? applicationformData.g2search.split(' ')[1]: '' ,
                        g2phoneNumber:applicationformData.g2search? applicationformData.g2search.split(' ')[2]: '' ,
                        useridentity:userDetails.userId,
                        interest:totalinterest
                    }).then(response =>{
                        console.log(response.data.message);
                        if(response){
                            alert(response.data.message);
                            if(response.data.message === "You already applied for a loan"){
                            
                            
                            }else{
                                setApplicationformData(
                                {
                                    firstName:"",
                                    lastName:"",
                                    IDnumber:"",
                                    phonenumber:"",
                                    amount:"",
                                    duration:"3 Months",
                                    purpose:"",
                                    g1firstName:"",
                                    g1lastName:"",
                                    g1phoneNumber:"",
                                    g2firstName:"",
                                    g2lastName:"",
                                    g2phoneNumber:"",
                                    interest:""
                                }
                                )
                            }
                        }
                        
                    })
                }else{
                    handlecancelLoan();
                }
            }
            }
        }


        function handlecancelLoan(){
            
            setApplicationformData(prevState => prevState);
            return alert("Loan application aborted!");
        }


        function HandlesOnkeyupAmount(){
            const value = applicationformData.amount
            const amountCheck = value>500001;
            setWrong(amountCheck);
        }

        //interest calclations
        const duration = (applicationformData.duration).split('m')[0]
        const interest = Math.floor(Number(applicationformData.amount) * 0.03 )
        const totalinterest = Math.floor(interest * duration)
        const total = Math.floor(Number(totalinterest) + Number(applicationformData.amount))
        // console.log("eat",typeof(Number((applicationformData.duration).split('m')[0])))
        // console.log('duration',duration)
        // const animal = Number(applicationformData.amount)
        // console.log("typeof",typeof(animal))


        if(applicationformData.g1search && !breakcondition){
            setG1name(applicationformData.g1search.split(' ')[0])
            setG1lname(applicationformData.g1search.split(' ')[1])
            setG1phone(applicationformData.g1search.split(' ')[2])
            setbreakcondition(true)
        }

        
        if(applicationformData.g2search && !breakcondition2){
            setG2name(applicationformData.g2search.split(' ')[0])
            setG2lname(applicationformData.g2search.split(' ')[1])
            setG2phone(applicationformData.g2search.split(' ')[2])
            setbreakcondition2(true)
        }

        console.log(applicationformData)



    return(
        <div>
            <CurrentUser />
            <fieldset className="qualifications">
                <legend>Qualifications you should meet to apply for a loan</legend>
                <ul >
                    <li className="loan--item">You must be a Kenya citizen with verifiable documents.</li>
                    <li className="loan--item">You must be an active member of st Andrews Women Group.</li>
                    <li className="loan--item">You must be a member of our group for atleast 3 months.</li>
                    <li className="loan--item">You must have shares atleast amounting to Ksh.3000.</li>
                    <li className="loan--item">You must have 2 guarantors who must be members of st Andrews Group.</li>
                    <li className="loan--item">The maximum due time for any loan is  12 months.</li>
                    <li className="loan--item">We currently offer loans up to <b>Ksh.500,000</b>.</li>
                    <li className="loan--item">Loan interest at 3% per Month.</li>
                </ul>
            </fieldset>
            <form className="form--loan" onSubmit={submitloanData}>
                <h4>Fill the form below to apply for a loan</h4>
                <fieldset className="details">
                <legend>Applicant Details</legend>
                <label htmlFor="firstName">First Name*</label>
                <input 
                className="loan--input" 
                id="firstName" 
                type='text'
                name="firstName"
                value={userDetails.firstname}
                onChange={handlesChangeAppLoan}
                required 
                />


                <label htmlFor="lastName">Last Name*  :    </label>
                <input 
                className="loan--input" 
                id="lastName" 
                type='text' 
                name="lastName"
                value={userDetails.lastname}
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
                value={userDetails.IDnumber}
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
                value={`0${userDetails.phonenumber}`}
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
                    onKeyUp={HandlesOnkeyupAmount}
                    required
                    />
                    {wrongAmount? <h3 className="invalid">The amount ({applicationformData.amount}) is above the limit</h3>: ""}
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
                    
                    <fieldset className="member--inquestion--loan">
                    <h4>Interest Calculator</h4>
                    Amount:{applicationformData.amount}<br />
                    Duration:{applicationformData.duration}<br />
                    interest(p.m):{interest}<br />
                    Total interest:{totalinterest}<br />
                    <b>Total:{total}</b><br />
                    </fieldset>

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


                    


                <label>Guarantor 1: </label>
                    <input 
                    className="search--members" 
                    id="members--searchbtn"
                    type="text" 
                    list="g1"
                    name="g1search"
                    value={applicationformData.g1search}
                    onChange={
                    //     (event) =>{
                    //     setSearch(event.target.value)
                    // } 
                    handlesChangeAppLoan
                }
                    placeholder="search guarantor by name"
                    />
                    <datalist id="g1" className="data--list">
                        {members? 
                        members.map(member =>(
                            (member.firstname === "Admin" ? "" :
                            (member.firstname === username? '' :
                            member.phonenumber === g2phone ? '':
                            <option value={`${member.firstname} ${member.lastname} ${member.phonenumber} `} >{`  ${member.firstname} ${member.lastname}    |       ${member.email}`}</option>
                            )))) : 'Nothing'}
                    </datalist>

                    <br />
                    <br />

                    <label htmlFor="g1firstName">First Name*</label>
                    <input 
                    className="loan--input" 
                    id="g1firstName" 
                    type='text' 
                    name="g1firstName"
                    value={applicationformData.g1search? applicationformData.g1search.split(' ')[0]: '' }
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <label htmlFor="g1lastName">Last Name*  :    </label>
                    <input 
                    className="loan--input" 
                    id="g1lastName" 
                    type='text' 
                    name="g1lastName"
                    value={applicationformData.g1search? applicationformData.g1search.split(' ')[1]: '' }
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <br />
                    <br />
                    {/* <label htmlFor="g1idNumber">ID Number*</label>
                    <input 
                    className="loan--input" 
                    id="g1idNumber" 
                    type='number' 
                    name="g1IDnumber"
                    value={applicationformData.g1IDnumber}
                    onChange={handlesChangeAppLoan} 
                    required 
                    /> */}

                    <label htmlFor="g1phoneNumber">Phone Number*:</label>
                    <input 
                    className="loan--input" 
                    id="g1phoneNumber" 
                    type='tel' 
                    name="g1phoneNumber"
                    value={applicationformData.g1search? applicationformData.g1search.split(' ')[2]: '' }
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <br />
                    <br />

                    <h4>Guarantor 2:</h4>

                    <label>Guarantor 2: </label>
                    <input 
                    className="search--members" 
                    id="members--searchbtn"
                    type="text" 
                    list="g2"
                    name="g2search"
                    value={applicationformData.g2search}
                    onChange={
                    //     (event) =>{
                    //     setSearch(event.target.value)
                    // } 
                    handlesChangeAppLoan
                }
                    placeholder="search guarantor by name"
                    />
                    
                    <datalist id="g2" className="data--list">
                        {members? 
                        members.map(member =>(
                            (member.firstname === "Admin" ? "" :
                            (member.firstname === username? '' :
                            <option value={`${member.firstname} ${member.lastname} ${member.phonenumber} `} >{`  ${member.firstname} ${member.lastname}    |       ${member.email}`}</option>
                            )))) : 'Nothing'}
                    </datalist>

                    <br />
                    <br />
                    <label htmlFor="g2firstName">First Name*</label>
                    <input 
                    className="loan--input" 
                    id="g2firstName" 
                    type='text'
                    name="g2firstName"
                    value={applicationformData.g2search? applicationformData.g2search.split(' ')[0]: '' }
                    onChange={handlesChangeAppLoan} 
                    required 
                    />

                    <label htmlFor="g2lastName">Last Name*  :    </label>
                    <input 
                    className="loan--input" 
                    id="g2lastName" 
                    type='text'
                    name="g2lastName"
                    value={applicationformData.g2search? applicationformData.g2search.split(' ')[1]: '' }
                    onChange={handlesChangeAppLoan}  
                    required
                    />

                    <br />
                    <br />

                    <label htmlFor="g2phoneNumber">Phone Number*:</label>
                    <input 
                    className="loan--input" 
                    id="g2phoneNumber" 
                    type='tel'
                    name="g2phoneNumber"
                    value={applicationformData.g2search? applicationformData.g2search.split(' ')[2]: '' }
                    onChange={handlesChangeAppLoan} 
                    required
                    />

                    <br />
                    <br />
                </fieldset>
                <button 
                type="button"
                    onClick={handlecancelLoan}>
                Cancel
                </button>
                <button>Submit</button>
            </form>
        </div>
    )
}