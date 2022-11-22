import React from "react";
import {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";


import '../styles/signin.css'
import pic from '../images/Cafebord-2-COLOURBOX23980354-1024x1024-1.jpg'


export default function Signin(){
    const navigate = useNavigate();
    const[loginStatus, setLoginstatus] = useState(false)//error code here 
    const [signinData, setSigninData] = useState(
        {   
            phonenumber:"",
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
        Axios.post('http://ec2-3-80-209-220.compute-1.amazonaws.com:3000/signin',
        {   
            phonenumber: signinData.phonenumber,
            password: signinData.password,
        }).then(response =>{            
            if(response.data.message){
                setLoginstatus(response.data.message)
            }else{
                setLoginstatus(response.data[0].firstname);
                window.localStorage.setItem("currentUserDetails", JSON.stringify(response.data[0]));
                window.localStorage.setItem("userId", response.data[0].userId);
                window.localStorage.setItem("username",response.data[0].firstname)
                window.localStorage.setItem("phonenumber",response.data[0].phonenumber)
                window.localStorage.setItem("isLoggedIn",true);
                if(response.data[0].phonenumber=== 115834321 && response.data[0].email === "jeillannjoroge76@gmail.com"){
                    navigate('/admin/adminmembers');
                }else{
                    navigate('/dashboard/summary');
                }
            }
        });
    }

    useEffect (() =>{
        Axios.get('http://localhost:3001/signin').then((response) =>{
            if(response){
                // setLoginstatus(true);
                setLoginstatus(response.data.user);
            }else{
                console.log('No response');
            }
        })
    },[]);

    ///show password code
    const[showPass, setShowPass] = useState(false);

    function showPassword(){
        setShowPass(showPass ? false : true)
    }

    return(

        <div>      
        <img src={pic} className ="coolpic" alt="cool"></img>
        <form className="signin--form" onSubmit={SigninFunc}>
            <h2 className="signin-text">Sign in</h2>
            <p className="signin-paragraph">Sign in to view your dashboard</p>

            <input 
            type='number' 
            className="username" 
            placeholder="Phone Number(07 or 01)" 
            name="phonenumber"
            value={signinData.phonenumber}
            onChange={handleChange}
            maxLength ={12}
            onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0,e.target.maxLength);
                }}
            required
            />

            <br />
            <br />
            <input 
            type={showPass ? "text" : "password"} 
            className="password" 
            placeholder="Password" 
            name="password"
            value={signinData.password}
            onChange={handleChange}
            required
            />
            <i onClick={showPassword} id ="showpassword" className="fa fa-eye" aria-hidden="true"></i>

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