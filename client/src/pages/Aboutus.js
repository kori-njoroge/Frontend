import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Aboutus(){
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
        <div className="aboutUs--body">
        <h1 className="aboutUs--title">About Us</h1>
        <h2>St Andrews Women Group</h2>
        <p className="about--content">
            St Andrews Women Group  is a savings and credit group  owned by dedicated and faithful members and managed on  values of love and charity.
            The group was formed in the year 2015 with 10 founding members. Currently, the membership is over 37 with around 1M in share capital
            The group is guided by principles . These by-laws are divided into the following:
        </p>
        <div className="mission--cards">
            <div className="about--cards">
                <i className="fa-regular fa-lightbulb fa-4x"></i>
                <h3>Vision</h3>
                <p>To be the leading self- help group in transforming the lives of our members through opportunities for wealth creation.</p>
            </div >
            <div className="about--cards">
                <i class="fa-solid fa-spinner fa-4x"></i>
                <h3>Mission</h3>
                <p>To empower members socially, economically and through a mutual learning process by offering simple financial solutions.</p>
            </div>
            <div className="about--cards">
                <i className="fa-solid fa-list-check fa-4x"></i>
                <h3>Core Values</h3>
                <p>
                    <ul className="list--dignity">
                        <li>Human Dignity</li>
                        <li>Truthfulness</li>
                        <li>Collective Ownership</li>
                        <li>Stewardship</li>
                        <li>Professionalism</li>
                        <li>Integrity</li>
                    </ul>
                </p>
            </div>
        </div>
        <div>
            <h2>Objectives of St Andrews Women Group</h2>
            <p className="objectives">
                <ul>
                    <li>To promote the savings culture among our members.</li>
                    <li>To enable our members gain economic prosperity through loan/credit.</li>
                    <li>To enable our members gain from collective wisdom in organising and managing their own finances and distributing the benefits among themselves. </li>
                    <li>To provide a forum for members to support each other through gurantorship programs</li>
                </ul>
            </p>
        <p className="copyright" id="aboutus--footer">Copyright&copy;2022St Andrews||All rights reserved</p>
        </div>
        </div>
        </div>
        </>
    )
}