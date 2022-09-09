import React from "react";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'

import '../styles/signup.css'
import group from '../images/group_en.png'
import axios from "axios";

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

    function handleChange(event){
        const{name,value} = event.target;
        setSignupData(prevData =>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    axios.defaults.withCredentials =true;
    
    function handleSubmit(event){
        event.preventDefault();
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
                    required
                    />
                    
                    <br /><br />
                    <label className="form--text" htmlFor="phonenumber">Phone Number</label><br />
                    <input 
                    id="phonenumber" 
                    type="tel" 
                    placeholder="+254700000000" 
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
                    required
                    />
                    
                    <br /><br />
                    <label className="form--text" htmlFor="password">Password</label><br />
                    <input 
                    id="password" 
                    type="password" 
                    onChange={handleChange}
                    name="password"
                    value={singupData.password}
                    required
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
                    
                    <br />
                    <br />
                    <span className="form--footer">
                    <button type="submit">Sign Up</button>
                    <button type="button"><Link to={'/signin'}>login</Link></button>
                    </span>
                </form>
            </div>
        </div>
    )
}