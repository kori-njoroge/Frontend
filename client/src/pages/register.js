import React, { useState,useEffect} from 'react'
import Axios  from 'axios';
import ApiLink from '../components/link';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Register() {

    const[register, setRegister] = useState()
    const[resut, setResut] = useState()
    const[currentUser, setCurrentUser] = useState()
    const navigate = useNavigate();
    const[message, setMessage] = useState("")
    const[sucess, setSuccess] = useState(false)
    const[loading, setLoading] = useState(false)
    const[formDataReg, setFormDataReg] = useState({
        phonenumber: "",
        amount: 500
    });


    useEffect(() =>{
        setRegister(JSON.parse(window.localStorage.getItem("signer")));
        setResut(JSON.parse(window.localStorage.getItem("resut")));
        setCurrentUser(JSON.parse(window.localStorage.getItem("currentUserDetails")));
    },[])


    function handleFormData(event){
        const{name, value, type, checked} = event.target
        setFormDataReg(prevFormDate =>{
            return {
            ...prevFormDate,
            [name]: type === "checkbox" ? checked : value
            }
        })
        }




    function handleSubmit(event){
        event.preventDefault();
        setLoading(true);
        console.log("regregir",register)
        if(register){
            console.log("Register true")
            Axios.post(`${ApiLink}/register`,{
                firstname:register.firstname,
                lastname:register.lastname,
                phonenumber :register.phonenumber,
                phonepay:formDataReg.phonenumber,
                amount:formDataReg.amount,
                purpose:"Registration Fee",
                userid:register.userId
            }).then(responsey =>{
                setMessage(responsey.data)
                setSuccess(true)
                setLoading(false)

                if(responsey.data === "Transaction Successful!"){
                    setMessage(`${responsey.data}.Redirecting sign in page..`)
                    window.localStorage.clear();
                    setTimeout(() => {
                        navigate('/signin');              
                    }, 3000)
                }
            })
        }else if(!resut){
        console.log("Register false")
        Axios.post(`${ApiLink}/register`,{
            firstname:currentUser.firstname,
            lastname:currentUser.lastname,
            phonenumber :currentUser.phonenumber,
            phonepay:formDataReg.phonenumber,
            amount:formDataReg.amount,
            purpose:"Registration Fee",
            userid:currentUser.userId
        }).then(response =>{
            setMessage(response.data)
            setSuccess(true)
            setLoading(false)

            if(response.data === "Transaction Successful!"){
                setMessage(`${response.data}.Redirecting sign in page..`)
                window.localStorage.clear();
                setTimeout(() => {
                    navigate('/signin');              
                }, 3000)
            }
        }).catch(err =>{
            console.log(err);
        })
    }
    // else if(register && !register){

    // }
    }

    function handleOnFocus(){
        setSuccess(false)
        setLoading(false);
    }


    return (
        <div className='register--mpesa'>
        <p className='heading--register'>Complete the registration to access to your account!</p>
        <div className='registration--section'>
            <div className='statement-section'>
                <fieldset className='reg--fieldset'>
                <ol>
                    <li>Each member is obliged to a 500 non refundable fee</li>
                    <li>Each member is obliged to a 500 non refundable fee</li>
                    <li>Each member is obliged to a 500 non refundable fee</li>
                    <li>Each member is obliged to a 500 non refundable fee</li>
                </ol>
                </fieldset>
            </div>
            <div className='reg--mpesa--section'>
                <fieldset className='reg--fieldset'>
                    <form onSubmit={handleSubmit}>
                        <h4>Fill the details</h4>
                        <label htmlFor='phonenumber'>Source of funds(Phone Number):</label>
                        <br/>
                        <input  
                        id="phonenumber" 
                        type="tel"
                        placeholder='2547/1XXXXXXXX'
                        name='phonenumber'
                        value={formDataReg.phonenumber}
                        onChange={handleFormData}
                        onFocus={handleOnFocus}
                        required
                        />

                        <br />
                        <br/>
                        <label htmlFor='amount'>Amount(Ksh):</label>
                        <br />
                        <input 
                        id='amount' 
                        type="text"
                        onChange={handleFormData}
                        value={formDataReg.amount}
                        readOnly
                        />

                        <br />
                        <br />
                        <button className='home--btn-reg' type='button'>Home</button>
                        <button className='reg--submit'> Complete</button>
                    </form>
                    <div style={{display: "inline"}}>
                    {sucess ? <p className={message === "We could not process your payment at the moment!"? "invalid" : "valid"}>{message}</p> : null}

                    </div>
                    <div style={{display: "inline"}}>
                    {loading ? <div  className='donut-wrapper'>
                        <div  className='donut multi'></div>
                    </div>
                    : ""}
                    </div>
                </fieldset>
            </div>
        </div>
        <p className="copyright">Copyright&copy;2022St Andrews||All rights reserved</p>
        </div>
    )
}
