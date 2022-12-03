import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import ApiLink from "../../../components/link";
import './adminmodal.css'

export default function Adminmodal({ setOpenModal }) {
    const[members, setMembers] = useState('')
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    useEffect( () =>{
        const a = JSON.parse(window.localStorage.getItem("allUsers"))
        console.log("fetched",a)
        setMembers(a[0].User);
    },[])

    console.log("Members are here",members)
    
return (
    <div className="modal--position">
    <div className="adminmodalContainer" >
        <div className="titleCloseBtn">
        <button
            onClick={() => {
            setOpenModal(false);
            }}
        >
            X
        </button>
        </div>
        <div className="title">
            <h3>Send Message</h3>
        </div>   
        <form>
            <label htmlFor="to">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To: </label>
            <input 
            id="to"
            type='text'
            className="search--members"
            placeholder="Search Members"
            list="brow1"
            required
            />
            <br />
            <small className="small-text"><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select 'All' to send to all Members</i></small>
            <datalist id="brow1" className="data--list">
                <option value={`All`}/>
            {members? 
        members.map(member =>(
                    <option value={`${member.firstname} ${member.lastname} `} >{`  ${member.firstname} ${member.lastname}    |       ${member.email}`}</option>
                )) : 'Nothing'}
            </datalist>
            <br />
            <br />
            <label htmlFor="subject">Subject: </label>
            <input 
            type='text'
            required
            />
            <br />
            <br />
            <label htmlFor="message">Message:</label><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea id="message" 
            className="message--textarea" 
            rows="7" 
            placeholder="Please type your message"
            required/>
            <br />
            <div className="modal--footer">
            <button  
            type='button' 
            className="admin--modalbtn"
            onClick={() =>{
                setOpenModal(false)
            }}
            > Cancel</button><br />
            <button 
            className="admin--modalbtn"
            onClick={() =>{
                Axios.post(`${ApiLink}/notifications`,
                {

                }).then(response =>{
                    console.log(response)
                }).catch(err =>{
                    console.log(err)
                })
            }}
            > Send</button>
            </div>
        </form> 
        
    </div>
    </div>

);
}
