import React from "react";
import {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";


import '../styles/signin.css'
import pic from '../images/Cafebord-2-COLOURBOX23980354-1024x1024-1.jpg'


export default function Signin(){
    const navigate = useNavigate();
    const[loginStatus, setLoginstatus] = useState("")
    const [signinData, setSigninData] = useState(
        {   
            firstname: "",
            IDnumber:"",
            password:""
        }
    )

    function handleChange(event){
        const{name,value} = event.target;
        setSigninData(prevData =>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    Axios.defaults.withCredentials= true;

    function SigninFunc(event){
        event.preventDefault();
        Axios.post('http://localhost:3001/signin',
        {
            IDnumber: signinData.IDnumber,
            password: signinData.password,
        }).then(response =>{
            if(response.data.message){
                setLoginstatus(response.data.message)
            }else{
                setLoginstatus(response.data[0].firstname);
                navigate('/dashboard');
            }
        });
    }

    useEffect (() =>{
        Axios.get('http://localhost:3001/signin').then((response) =>{
            setLoginstatus(response.data.user);
        })
    },[]);

    return(

        <div>      
        <img src={pic} className ="coolpic" alt="cool"></img>
        <form className="signin--form" onSubmit={SigninFunc}>
            <h2 className="signin-text">Sign in</h2>
            <p className="signin-paragraph">Sign in to view your dashboard</p>

            <input 
            type='number' 
            className="username" 
            placeholder="ID number" 
            name="IDnumber"
            value={signinData.IDnumber}
            onChange={handleChange}
            maxLength ={8}
            onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0,e.target.maxLength);
                }}
            required
            />

            <br />
            <br />
            <input 
            type='password' 
            className="password" 
            placeholder="Password" 
            name="password"
            value={signinData.password}
            onChange={handleChange}
            required
            />

            <br/>
            <br/>
            <section className ="forgot-section">
                <div className="remember">
                    <input className = "checkbox" type="checkbox" id="remember"/> 
                    <label>Remember me</label>
                </div>
                <div className="forgot--password">
                <Link to= {'/signup'}>Forgot password</Link>
                </div>
            </section>
            <br/>
            <br />
            <button className="signin-btn" type="submit"> Sign in</button>
            <p className="wrong--credentials">{loginStatus}</p>
        <div>
            <p className="no--account">Dont have an account  <Link to={'/signup'}>Sign Up</Link></p>
        </div>
        </form>
        </div>
        
    )
}