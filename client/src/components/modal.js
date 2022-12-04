import React, { useEffect, useState } from "react";
import "./Modal.css";
import logo from '../images/user.png'
import Axios from "axios";
import ApiLink from "./link";

export default function Modal({ setOpenModal }) {
    const currentUser = window.localStorage.getItem("username")
    const userid = window.localStorage.getItem("userId")
    const[messages, setmessages] = useState()
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect( () =>{
        Axios.post(`${ApiLink}/notificationsclient`,{
            userid:userid
        }).then(response =>{
            setmessages((response.data[0].response).concat(response.data[1].resres))
            
        }).catch(err =>{
            console.log(err);
        })
    },[])



        if(messages){
            var kori =messages.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
        }



    console.log("messgaeeeee",messages)
    
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
        <h3>Notifications  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <i 
            className="fa-solid fa-rotate-right"    
            ></i></h3>
        {/* <hr width="40%" size="1" color="white"/> */}
        </div>
        <p className="fieldset--title">Welcome {currentUser}</p>
        <p className="fieldset--date">{date}</p>
        <div>
        <fieldset className="bdy">
            {messages?
                messages.map(message =>(
                    <div className="content--holder" key={message.NotificationId}>
                    <i id="admin--icon" className="fas fa-user "></i>
                    <div>
                    <fieldset className="content--info">
                        {message.message}
                    </fieldset>
                    <small className="small--details">{message.source} {(message.createdAt).split('T')[0]} {((message.createdAt).split('T')[1]).split('.')[0]}</small>
                    </div>
                    </div>
                ))
            : 
            <div className="content--holder">
            <i id="admin--icon" className="fas fa-user "></i>
            <div>
            <fieldset className="content--info">
                Hello {currentUser} no messages today  &nbsp;&nbsp;&nbsp;<i className="fa-solid fa-check-double"></i>
            </fieldset>
            <small className="small--details">&nbsp;&nbsp;&nbsp;{date}</small>
            </div>
            </div>
            }
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
