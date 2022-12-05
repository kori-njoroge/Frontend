import React from "react";
import {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import ApiLink from "../components/link";


import '../styles/signin.css'
import pic from '../images/Cafebord-2-COLOURBOX23980354-1024x1024-1.jpg'



export default function Signin(){
    const navigate = useNavigate();
    const [loading, setLoading] =useState(false);
    const[loginStatus, setLoginstatus] = useState(false)//error code here 
    const [signinData, setSigninData] = useState(
        {   
            phonenumber:"",
            password:""
        }
    )
    const[reg, setReg] = useState(false)
    const[regStatus, setRegStatus] = useState("")

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
        setLoading(true)
        Axios.post(`${ApiLink}/signin`,
        {   
            phonenumber: signinData.phonenumber,
            password: signinData.password,
        }).then(response =>{    
            console.log("signedin",response.data)        
            setLoading(false)
            if(response.data.message){
                setLoginstatus(response.data.message)
            }else{
                // setLoginstatus(response.data[0].result[0].firstname);
                const status = response.data[0].result[0].accountStatus
                const log = response.data[0].result[0]
                const reg = response.data[1].resut[0].total
                window.localStorage.setItem("currentUserDetails", JSON.stringify(log));
                window.localStorage.setItem("userId", log.userId);
                window.localStorage.setItem("username",log.firstname)
                window.localStorage.setItem("phonenumber",log.phonenumber)
                window.localStorage.setItem("isLoggedIn",true);
                window.localStorage.setItem("resut",reg);
                if(log.phonenumber=== 115834321 && log.email === "jeillannjoroge76@gmail.com"){
                    navigate('/admin/adminmembers');
                }else if(reg === null){
                    setReg(true)
                    setRegStatus("Please pay the registration fee to access your account")
                    setTimeout(() => {
                        navigate('/register');
                    }, 6000)
                }else if( status === 'Deactivated'){
                    setLoginstatus('Your account is deactivated please contact the admin for help')
                }else{
                    navigate('/dashboard/summary');
                }
            }
        });
    }

    useEffect (() =>{
        Axios.get(`${ApiLink}/signin`).then((response) =>{
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

    function handleonFocus(){
        setReg(false)
        setLoginstatus('')
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
            onFocus={handleonFocus}
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
            onFocus={handleonFocus}
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
            {loading ? <div  className='donut-wrapper'>
                            <div  className='donut multi'></div>
                        </div>
                    : ""}
            {reg? <p className="invalid"><Link className="invalid"  style={{textdecoration: 'node'}} to = {'/register'}>{regStatus}</Link></p> : ""}
        </form>
        </div>
        
    )
}