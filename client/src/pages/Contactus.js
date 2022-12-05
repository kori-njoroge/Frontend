import React from "react";
import { NavLink } from "react-router-dom";

export default function ContactUs(){
    return(
        <>
            <div className="aboutUs--nav">
            <h2>St Andrews Women Group</h2>
            <div>
                <NavLink to={"/"}><button className="homenav--btn"><i className="fa fa-home"/>  Home</button></NavLink>
                <NavLink to={'/Aboutus'}><button className="homenav--btn">About Us</button></NavLink>
                <NavLink to={'/Contactus'}><button className="homenav--btn"><i className="fa fa-envelope"/> Contact Us</button></NavLink>
                <NavLink to ={'/signin'}><button className="homenav--btn">Sign in</button></NavLink>
                <NavLink to={'/signup'}><button className="homenav--btn">Get started</button></NavLink>
            </div>
            </div>
            <div>
        
            <h1 className="contact--title">Get In Touch</h1>
            <div className="mission--cards">
            <div className="about--cards">
                <i className="fa-solid fa-mobile-screen-button fa-4x"></i>
                <h3>Phone</h3>
                <p>Support: +254(0)706306415 </p>
                <p>Admin: +254(0)115834321 </p>
            </div >
            <div className="about--cards">
                <i className="fa-regular fa-envelope fa-4x"></i>
                <h3>Email</h3>
                <p className="email--link"><a href = 'mailto:standrewswomengroup@gmail.com'>standrewswomengroup@gmail.com</a></p>
            </div>
            <div className="about--cards">
                <i className="fa-solid fa-map-location-dot fa-4x"></i>
                <h3>Address</h3>
                <p>
                    Mweiga Town, Nyeri
                </p>
            </div>
        </div>
        <div className="contact--uus">
            <h3>Contact Us</h3>
            <form className="contact--us--email">
                <div className="form">
                <input  className="name--phone" type='text' placeholder='Name' required />
                <input  className="name--phone" type='tel' placeholder='Phone Number'  required/>
                </div>
                <input  className="email--contact" type='email' placeholder='Email' required /><br />
                <textarea placeholder="message"/> <br />
                <button className="email--link"><a href= 'mailto:standrewswomengroup@gmail.com' >Send Message</a></button>
            </form>

        </div>
        <p className="copyright" id="aboutus--footer">Copyright&copy;2022St Andrews||All rights reserved</p>
            </div>
        </>
    )
}