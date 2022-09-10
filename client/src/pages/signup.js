import React from "react";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'

import '../styles/signup.css'
import group from '../images/group_en.png'
import axios from "axios";
import PWDRequisite from "./pswRequiste";

export default function Signup(){

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
        

        //password
    const[PwdRequisite, setPwdRequisite] = useState(false);
    const[checks, setChecks] = useState({
        capsLetterCheck: false,
        lowerLetterCheck:false,
        numberCheck:false,
        PWDLengthCheck:false,
        specialCharCheck:false,
    })


    function handleOnfocus(){
        setPwdRequisite(true)
    }

    function handleOnBlur(){
        setPwdRequisite(false)
    }
    //Id
    function handleonBlurconfirmPassword(){
        setAdvice(false);
    }
    function handleonFocusconfirmPassword(){
        setAdvice(false);
    }
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

        Axios.post('http://localhost:3001/signup',
        {
            firstname: singupData.firstname, 
            lastname: singupData.lastname, 
            email: singupData.email,
            phonenumber: singupData.phonenumber,
            IDnumber: singupData.IDnumber,
            password: singupData.password,
            confirmpassword: singupData.confirmpassword
        })
        navigate('/signin')
        }
    }
    
    return(
        <div className="signup--page">
            <span className="image--section">
            <img src={group} alt="Group"/>
            </span>
            <div className="signup--form">
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
                    value={singupData.phonenumber}
                    required
                    />
                    
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
                    required
                    />
                    
                    <br /><br />
                    <label className="form--text" htmlFor="password">Password</label><br />
                    <input 
                    id="password" 
                    type="password" 
                    name="password"
                    value={singupData.password}
                    required
                    onChange={handleChange}
                    onFocus={handleOnfocus}
                    onBlur ={handleOnBlur}
                    onKeyUp={handleOnKeyUp}
                    />
                    
                    <br /><br />
                    <label className="form--text" htmlFor="confirmpassword">Confirm Password</label><br />
                    <input 
                    id="confirmpassword" 
                    type="password" 
                    onChange={handleChange}
                    name="confirmpassword"
                    value={singupData.confirmpassword}
                    required
                    />
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
                    <button type="submit">Sign Up</button>
                    {/* <button type="button"><Link to={'/signin'}>login</Link></button> */}
                    </span>
                </form>
            </div>
        </div>
    )
}