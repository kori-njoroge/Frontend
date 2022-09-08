import React from "react";
import { Link } from "react-router-dom";


import '../styles/signin.css'
import pic from '../images/Cafebord-2-COLOURBOX23980354-1024x1024-1.jpg'

export default function Signin(){
    return(
        <>  
        <body>      
        <img src={pic} className ="coolpic" alt="cool"></img>
        <form className="signin--form">
            <h2 className="signin-text">Sign in</h2>
            <p className="signin-paragraph">Sign in to view your dashboard</p>
            <input type='text' className="username" placeholder="Email" required/>
            <br />
            <br />
            <input type='password' className="password" placeholder="Password" required /> 
            <br/>
            <br/>
            <section className ="forgot-section">
                <div className="remember">
                    <input className = "checkbox" type="checkbox" id="remember"/> 
                    <label>Remember me</label>
                </div>
                <div className="forgot--password">
                <a href="">Forgot password</a>
                </div>
            </section>
            <br/>
            <br />
            <button className="signin-btn" type="submit"> Sign in</button>
        <div>
            <p className="no--account">Dont have an account  <Link to={'/signup'}>Sign Up</Link></p>
        </div>
        </form>
        </body>
        </>
    )
}