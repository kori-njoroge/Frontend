import React from "react";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'
import '../styles/signup.css'
import group from '../images/group_en.png'
import axios from "axios";
import PWDRequisite from "./pswRequiste";
import PhoneRequisite from "./phoneRequisite";
import { NavLink } from "react-router-dom";

export default function Signup(){
    

    const[signupText, setsignupText] = useState("");
    const[userAdvice, setUserAdvice] = useState(false)
    const navigate = useNavigate();
    const[singupData, setSignupData] = useState(
        {
            firstname: "", 
            lastname: "", 
            email: "",
            phonenumber: "",
            IDnumber: "",
            password: "",
            confirmpassword: ""
        }
        );
        //passwords do not match
        const[advice, setAdvice] = useState(false);


        // validator
        
        //PHONE NUMBER VALIDATION
        // const[statementPhone, setStatementPhone]= useState("");



        //password
    const[PwdRequisite, setPwdRequisite] = useState(false);
    const[checks, setChecks] = useState({
        capsLetterCheck: false,
        lowerLetterCheck:false,
        numberCheck:false,
        PWDLengthCheck:false,
        specialCharCheck:false,
    })
    //phone number checks
    const[phoneNumberCheck, setNumberCheck] = useState(false);


    function handleOnfocus(){
        setPwdRequisite(true)
    }
    //phone no
    function handleOnfocusPhone(){
        setPhoneRequisite(true)
    }

    function handleOnBlur(){
        setPwdRequisite(false)
    }
    //phone no
    function handleOnBlurPhone(){
        setPhoneRequisite(false)
    }

    //confirmPassword
    function handleonBlurconfirmPassword(){
        setAdvice(false);
    }
    function handleonFocusconfirmPassword(){
        setAdvice(false);
    }
    //show Password Code
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const toggleConfirmPasswordVisiblity = () => {
        setConfirmPasswordShown(confirmpasswordShown ? false : true);
    };
    
    //  PHONE NUMBER VALIDATOR
    const[phoneRequisite, setPhoneRequisite] = useState(false);

    //password
    function handleOnKeyUp(event){
        const {value} = event.target;
        const capsLetterCheck= /[A-Z]/.test(value);
        const lowerLetterCheck =/[a-z]/.test(value)
        const numberCheck =/[0-9]/.test(value);
        const PWDLengthCheck = value.length >=8;
        const specialCharCheck = /[!@#$%&*.]/.test(value);
        setChecks({...checks,
            capsLetterCheck,
            lowerLetterCheck,
            numberCheck,
            PWDLengthCheck,
            specialCharCheck
        });
    };

    //phone number validator
    function handleOnKeyUpPhone(event){
        const{value} = event.target;
        const phoneNoCheck = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value);
        setNumberCheck(phoneNoCheck);

    }

    //validate ID number.
    // const[idValidity, setIdValidity] =useState(true);
    const[idnumbercheck, setIdnumberCheck] = useState({
        idLengthCheck:""
        // similarityCheck:false
    });

    function handleIdCheck(event){
        const {value} = event.target;
        const idLengthCheck = /\d{8}/.test(value);
        // const similarityCheck =/^(?!.*(\d)\1{5}).*$/.test(value);
        setIdnumberCheck({
            idLengthCheck
            // similarityCheck
        }
        );
    }


        //end of   validator

    function handleChange(event){
        const{name,value} = event.target;
            setSignupData(prevData =>{
                return{
                    ...prevData,
                    [name]:value
                }
            });
        
    }

    axios.defaults.withCredentials =true;
    function handleSubmit(event){
        event.preventDefault();
        const{password,confirmpassword} = singupData;
        if(confirmpassword !== password){
            setAdvice(true);
        }else{
        Axios.post('http://ec2-3-80-209-220.compute-1.amazonaws.com:3000/signup',
        
        {
            firstname: singupData.firstname, 
            lastname: singupData.lastname, 
            email: singupData.email,
            phonenumber: singupData.phonenumber,
            IDnumber: singupData.IDnumber,
            password: singupData.password,
            confirmpassword: singupData.confirmpassword
        }).then(resres =>{
            // console.log(resres);
            if(resres.data.message){
                setsignupText(resres.data.message);
                if(resres.data.message === "Registration successful!"){
                    setTimeout(() => {
                    navigate('/signin');                
                    }, 1500)
                }
                setUserAdvice(true);
                return;
            }
            }
        );
        }
    }
    console.log(signupText);
    ////confirm password on focus
    function confirmFocus(){
        setAdvice(false);
    }

    return(
        <>
        <NavLink to={"/"}  ><h4 className="back">Home</h4></NavLink>
        <div className="signup--page">
            <span className="image--section">
            <img src={group} alt="Group"/>
            </span>
            <div className="signup--form">
                {userAdvice?  <p className={signupText === "Registration successful!"? "valid" : "invalid"}>{signupText}</p> : ""}
                <h2>Sign up</h2>
                <h4>Fill the form to create your profile</h4>
                <form onSubmit={handleSubmit}>
                    <label className="form--text" htmlFor="firstname">First Name</label><br />
                    <input id="firstname" 
                    type="text" 
                    placeholder="First Name" 
                    onChange={handleChange}
                    name='firstname'
                    value={singupData.firstname}
                    maxLength={50}
                    required />
                    <br /><br />
                    <label className="form--text" htmlFor="lastname">Last Name</label><br />
                    <input 
                    id="lastname" 
                    type="text" 
                    placeholder="Last Name" 
                    onChange={handleChange}
                    name ="lastname"
                    value={singupData.lastname}
                    maxLength={50}
                    required
                    />
                    
                    <br /><br />
                    <label className="form--text" htmlFor="email">Email</label><br />
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="janedoe@gmail.com" 
                    onChange={handleChange}
                    name="email"
                    value={singupData.email}
                    maxLength={100}
                    required
                    />
                    
                    <br /><br />
                    <label className="form--text" htmlFor="phonenumber">Phone Number</label><br />
                    <input 
                    id="phonenumber" 
                    type="tel" 
                    placeholder="07 or 01" 
                    onChange={handleChange}
                    name="phonenumber"
                    onKeyUp={handleOnKeyUpPhone}
                    onFocus={handleOnfocusPhone}
                    onBlur={handleOnBlurPhone}
                    value={singupData.phonenumber}
                    maxLength ={10}
                    onInput={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(0,e.target.maxLength);
                    }}
                    required
                    />
                    {phoneRequisite ?
                        <PhoneRequisite 
                        // phoneNumberFlag =
                        phoneNumberFlag={phoneNumberCheck ? "valid" :"invalid"}
                        />
                        : null
                    }
                    
                    <br /><br />
                    <label className="form--text" htmlFor="idnumber">ID Number</label><br />
                    <input 
                    id="idnumber" 
                    type="number" 
                    onChange={handleChange}
                    name="IDnumber"
                    value={singupData.IDnumber}
                    maxLength ={8}
                    onInput={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(0,e.target.maxLength);
                    }}
                    onBlur ={handleonBlurconfirmPassword}
                    onFocus ={handleonFocusconfirmPassword}
                    onKeyUp={handleIdCheck}
                    required
                    />
                    {idnumbercheck.idLengthCheck ?  ""/**<p className="password--notmatch">Input valid Id Number</p>*/ : "" }
                    
                    <br /><br />
                    <label className="form--text" htmlFor="password">Password</label><br />
                    <input 
                    id="password" 
                    type={passwordShown ? "text" : "password"} 
                    name="password"
                    value={singupData.password}
                    required
                    onChange={handleChange}
                    onFocus={handleOnfocus}
                    onBlur ={handleOnBlur}
                    onKeyUp={handleOnKeyUp}
                    />
                    <i onClick={togglePasswordVisiblity} id ="showpassword" className="fa fa-eye" aria-hidden="true"></i>
                    
                    <br /><br />
                    <label className="form--text" htmlFor="confirmpassword">Confirm Password</label><br />
                    <input 
                    id="confirmpassword" 
                    type={confirmpasswordShown ? "text" : "password"}
                    onChange={handleChange}
                    name="confirmpassword"
                    value={singupData.confirmpassword}
                    onFocus={confirmFocus}
                    required
                    />
                    <i onClick={toggleConfirmPasswordVisiblity} id="showpassword" className="fa fa-eye" aria-hidden="true"></i>
                    {advice? <p className="password--notmatch">Passwords do not match</p> : ""}
                    {PwdRequisite ? 
                    <PWDRequisite 
                        capsLetterFlag ={checks.capsLetterCheck ? "valid" : " invalid"}
                        lowerLetterFlag ={checks.lowerLetterCheck ? "valid" : "invalid"}
                        numberFlag = {checks.numberCheck ? "valid" : "invalid"}
                        pwdLengthFlag = {checks.PWDLengthCheck ? "valid" : "invalid"}
                        specialCharFlag ={checks.specialCharCheck ? "valid" : "invalid"}
                    /> : null}
                    <br />
                    <br />
                    <span className="form--footer">
                    <button type="button"><Link to={'/signin'}>login</Link></button>
                    <button type="submit">Sign Up</button>
                    </span>
                </form>
            </div>
        </div>
        </>
    )
}