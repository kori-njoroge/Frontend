import React from "react";
import { NavLink } from "react-router-dom";
import people from '../images/loginBackgroundImage.jpg'
import sidebarpic from "../images/sidebar.png"
import applyloanpic from "../images/applyloan.png"
import signuppic from '../images/signup.png'

export default function Home(){
    return(
    <div className="home--page">
        <nav className="home--nav">

            <NavLink to={"/"}><button className="homenav--btn"><i className="fa fa-home"/>  Home</button></NavLink>
            <NavLink to={'/Aboutus'}><button className="homenav--btn">About Us</button></NavLink>
            <NavLink to={'/Contactus'}><button className="homenav--btn"><i className="fa fa-envelope"/> Contact Us</button></NavLink>
            <NavLink to ={'/signin'}><button className="homenav--btn">Sign in</button></NavLink>
            <NavLink to={'/signup'}><button className="homenav--btn">Get started</button></NavLink>
        </nav>
        <div className="home--bottom">
            <span className="intro">
            <h3>St Andrews group</h3>
            <p className="intro--paragraph">St Andrews is a women table banking group that brings together women from majorly small scale retailer businesses.<br/><br/>We are a dedicated and focused to achieve the success of each and every of our member, through issuing welfare funds and investiment advice to members.<br /><br/>Joining our group is what you need to get to the next level.</p>
            <span className="intro--buttons">
            <NavLink to ={'/signin'}><button className="homenav--btn">Sign in</button></NavLink>
            <NavLink to={'/signup'}><button className="homenav--btn">Get started</button></NavLink>
            </span>
            </span>
            <img  className="home--photo"  src={people} alt ="people"/>
        </div>
        <div className="middle-section">
            <div className="image-section1">
            {/* <img className="intro--image1" src={signuppic} alt ="siebarpic" />
            <p>Easy to set up like right you can sugnhnup an gget loan immediately because your lonee is alseep dawg</p> */}
            </div>
            {/* <img className="intro--image2" src={sidebarpic} alt ="siebarpic" /> */}
            {/* <img className="intro--image3" src={applyloanpic} alt ="siebarpic" /> */}
        </div>
        <div className="home--footer">
            <span className="footer--cards"> 
                <h3>St Andrews Women Group</h3>
                <p>St Andrews Women Group is a women financial development team aimed at helping women grow finacially, investment and self- development. Offers help where require</p>
            </span>
            <span className="footer--cards"> 
            <h3>Quick links</h3>
            <p className="quick--links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to ={'/signin'}>Sign In</NavLink>
            <NavLink to={'/signup'}>Get started</NavLink>
            </p>
            </span>
            <span className="footer--cards"> 
                    <h4><i className="fa fa-envelope  fa-2x "></i> korinjoroge63@gmail.com</h4><br />
                    <h4><i className="fas fa-phone fa-1x"/> +254706306415</h4><br />
                    <h4><i className="fas fa-phone fa-1x"/> +254706306415</h4>
            </span>
            <span >
                <i id="social--icons"className="fa-brands fa-whatsapp fa-2x "/><br/><br/>
                <i id="social--icons"className="fa-brands fa-twitter fa-2x "></i><br/><br/>
                <i id="social--icons"className="fa-brands fa-instagram fa-2x"></i> <br/><br/>
                <i id="social--icons"className="fa-brands fa-facebook fa-2x"></i> 
            </span>
        </div>
                <p className="copyright">Copyright&copy;2022St Andrews||All rights reserved</p>
    </div> 
    )
}