import React, { useEffect, useMemo, useState } from "react";
import Axios from "axios";
import ApiLink from "./link";
import '../pages/Admin/Admincomponents/adminmodal.css'
import logo from '../images/user.png'
import { useNavigate } from "react-router-dom";

export default function Profile({ setModalProfile }) {
    const navigate = useNavigate();
    const[loading, setLoading]= useState(false)
    const[reply, setReply] = useState('')
    const[changePass, setChangePass] = useState(false)
    const user = JSON.parse(window.localStorage.getItem('currentUserDetails'))
    console.log(user)


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const[formInfo, setFormInfo] = useState({
        password: '',
        confirmPassword: ''
    })


    function Signout(){
        localStorage.clear();
        navigate('/')
        window.location.reload();
}

function handleChange(event){
    const{name,value} = event.target;
        setFormInfo(prevData =>{
            return{
                ...prevData,
                [name]:value
            }
        });
    
}

function handleSubmitData(event){
    event.preventDefault()
    if(formInfo.password === formInfo.confirmPassword){
        setLoading(true)
        Axios.post(`${ApiLink}/changepassword`,{
            userid:user.userId,
            password:formInfo.password,
        }).then(resres =>{
            setReply(resres.data)
            // console.log(resres)
            setLoading(false)
        }).catch(err =>{
            console.log(err)
            setLoading(false)
        })
    }else{
        setReply('Passwords do no match!')
    }

}

console.log(formInfo)


return (
    <div className="modal--position">
    <div className="profileContainer" >
        <div className="titleCloseBtn">
        <button
            onClick={() => {
            setModalProfile(false);
            }}
        >
            X
        </button>
        </div>
        <div className="title">
            <img  className="profile--img" src={logo} />
            <h4 className="profile--name">My Profile<br />
            <button onClick={Signout} >Log out  <i className="fa-solid fa-right-from-bracket" id ="logoutIcon"></i></button>
            </h4>
            {/* <hr /> */}
            <p>Name:<br />{user.firstname} {user.lastname}</p>
            <br/>
            <br/>
            {/* <hr /> */}
            <br/><p>phone Number:<br />0{user.phonenumber}</p>
            <br />
            <br />
            <br/><p>Email:<br />{user.email}</p>
            {/* <hr /> */}
            <br />
            <br />
            <br />
            <br />
            <button onClick={() =>{
                setChangePass(prevstate => !prevstate)
            }}>Change Password</button>
            {changePass?
            <form className="change--password" onSubmit={handleSubmitData}>
                <input 
                type='text'
                placeholder="New Password"
                name='password'
                onChange={handleChange}
                value={formInfo.password}
                required
                />
                <input 
                type='text'
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                value={formInfo.confirmPassword}
                required
                />
                <br />
                {loading ? <div  className='donut-wrapper'>
                        <div  className='donut multi'></div>
                    </div>
                    : ""}
                <button type="button" onClick={() =>{
                    setChangePass(false)
                }}>Cancel</button>
                <button > Submit</button>
                {reply? <p className={reply === 'Passwords do no match!' || reply === 'Error, try again later!' ?'invalid' : 'valid'}>{reply}</p> : ''}
            </form> : 
            ''}
        </div>   
    </div>
    </div>

);
}
