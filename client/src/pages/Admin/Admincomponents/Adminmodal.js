import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import ApiLink from "../../../components/link";
import './adminmodal.css'

export default function Adminmodal({ setOpenModal }) {
    const [currentUser, setCurrentUser] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const[members, setMembers] = useState('')
    const[loading, setLoading]= useState(false)
    const[reply, setReply] = useState('')
    const[id, setId] = useState('')
    const[messageData, setMessageData] = useState(
        {
            to: "",
            subject: "",
            message: ""
        }
    )



    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    useEffect( () =>{
        const a = JSON.parse(window.localStorage.getItem("allUsers"))
        const b = window.localStorage.getItem("username")
        const c = window.localStorage.getItem("phonenumber")
        console.log("fetched",a)
        setCurrentUser(b)
        setMembers(a[0].User);
        setPhoneNumber(c)
    },[])


    function handleChange(event){
        const{name,value} = event.target;
            setMessageData(prevData =>{
                return{
                    ...prevData,
                    [name]:value
                }
            });
        
    }

    function handleOnFocus(){
        setReply('');
    }



    function handleSubmit(event){
        event.preventDefault()
        setLoading(true)
        if(messageData.to){
            const b = messageData.to.split('-')[1]
            if(b){
                Axios.post(`${ApiLink}/notifications`,
                {
                    to:messageData.to.split('-')[0],
                    id:b,
                    subject:messageData.subject,
                    message:messageData.message,
                    source:currentUser,
                    phonenumber:phonenumber,
                    firstname:messageData.to.split(' ')[0]
                }).then(response =>{
                    setLoading(false)
                    setReply(response.data)
                    if(response.data === 'Message sent successfully!'){
                    setMessageData(
                        {
                            to: "",
                            subject: "",
                            message: ""
                        }
                    )
                    }else{
                        setMessageData(
                            {
                                to: messageData.to,
                                subject: messageData.subject,
                                message: messageData.message
                            }
                        )
                    }
                    console.log(response.data)
                }).catch(err =>{
                    setLoading(false)
                    console.log(err);
                })


            }else{

                Axios.post(`${ApiLink}/notifications`,
                {
                    to:messageData.to,
                    id:0,
                    subject:messageData.subject,
                    message:messageData.message,
                    source:currentUser,
                    phonenumber:phonenumber
                }).then(response =>{
                    setLoading(false)
                    setReply(response.data)
                    if(response.data === 'Message sent successfully!'){
                    setMessageData(
                        {
                            to: "",
                            subject: "",
                            message: ""
                        }
                    )
                    }else{
                        setMessageData(
                            {
                                to: messageData.to,
                                subject: messageData.subject,
                                message: messageData.message
                            }
                        )
                    }
                    console.log(response.data)
                }).catch(err =>{
                    setLoading(false)
                    console.log(err);
                })
            }
        }
    }
    // console.log("Members are here",members)
    console.log(messageData)
    console.log(currentUser)

console.log('call me', id)
    
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
            <h3>New Message</h3>
        </div>   
        <form onSubmit={handleSubmit}>
            <label htmlFor="to">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To: </label>
            <input 
            id="to"
            type='text'
            className="search--members"
            placeholder="Search Members"
            list="brow1"
            name="to"
            onChange={handleChange}
            value={messageData.to}
            onFocus={handleOnFocus}
            required
            />
            <br />
            <small className="small-text"><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select 'All' to send to all Members</i></small>
            <datalist id="brow1" className="data--list">
                <option value={`All`}/>
            {members? 
        members.map(member =>(
                    <option value={`${member.firstname} ${member.lastname} -${member.userId} `} >{`  ${member.firstname} ${member.lastname}    |       ${member.email}`}</option>
                )) : 'Nothing'}
            </datalist>
            <br />
            <br />

            <label htmlFor="subject">Subject: </label>
            <input 
            type='text'
            name="subject"
            onChange={handleChange}
            value ={messageData.subject}
            onFocus={handleOnFocus}
            required
            />

            <br />
            <br />
            <label htmlFor="message">Message:</label><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea id="message" 
            className="message--textarea" 
            rows="5" 
            placeholder="Please type your message"
            name='message'
            onChange={handleChange}
            value={messageData.message}
            onFocus={handleOnFocus}
            required
            />

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
        {loading ? <div  className='donut-wrapper'>
                        <div  className='donut multi'></div>
                    </div>
                    : ""}
        {reply? <p className={ reply === "Message sent successfully!"?  "good--reply":"error--reply"}>{reply}</p> : ''}
    </div>
    </div>

);
}
