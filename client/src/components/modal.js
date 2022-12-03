import React, { useEffect } from "react";
import "./Modal.css";
import logo from '../images/user.png'
import Axios from "axios";
import ApiLink from "./link";

export default function Modal({ setOpenModal }) {
    const currentUser = window.localStorage.getItem("username")
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect( () =>{
        Axios.get(`${ApiLink}/notifications`).then(response =>{
            console.log(response);
        }).catch(err =>{
            console.log(err);
        })
    },[])

    
return (
    <div className="modalBackground">
    <div className="modalContainer" >
        <div className="titleCloseBtn">
        <button
            onClick={() => {
            setOpenModal(prevState => !prevState);
            }}
        >
            X
        </button>
        </div>
        <div className="title">
        <h3>Notifications</h3>
        {/* <hr width="40%" size="1" color="white"/> */}
        </div>
        <p className="fieldset--title">Welcome {currentUser}</p>
        <p className="fieldset--date">{date}</p>
        <div>
        <fieldset className="bdy">

            <div className="content--holder">
            <i id="admin--icon" className="fas fa-user "></i>
            <div>
            <fieldset className="content--info">
                Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping aroundWelcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around
            </fieldset>
            <small className="small--details">{currentUser} {date} {date}</small>
            </div>
            </div>

            <div className="content--holder">
            <i id="admin--icon" className="fas fa-user "></i>
            <div>
            <fieldset className="content--info">
                Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping aroundWelcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around
            </fieldset>
            <small><b>{currentUser} {date} {date}</b></small>
            </div>
            </div>

            <div className="content--holder">
            <i id="admin--icon" className="fas fa-user "></i>
            <div>
            <fieldset className="content--info">
                Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping aroundWelcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around
            </fieldset>
            <small className="small--details">{currentUser} {date} {date}</small>
            </div>
            </div>
            <div className="content--holder">
            <i id="admin--icon" className="fas fa-user "></i>
            <div>
            <fieldset className="content--info">
                Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping aroundWelcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping around
            </fieldset>
            <small className="small--details">{currentUser} {date} {date}</small>
            </div>
            </div>
            <div className="content--holder">
            <i id="admin--icon" className="fas fa-user "></i>
            <div>
            <fieldset className="content--info">
                Welcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome tomorrow we jumping aroundWelcome tomorrow we jumping around Welcome tomorrow we jumping around Welcome 
            </fieldset>
            <small className="small--details">{currentUser} {date} {date}</small>
            </div>
            </div>

        </fieldset>
            </div>
        <div className="footer">
        <button
            onClick={() => {
            setOpenModal(false);
            }}
            id="cancelBtn"
        >
            Cancel
        </button>
        <button>Continue</button>
        </div>
    </div>
    </div>
);
}
