import  Axios  from "axios";
import React, { useEffect, useState } from "react";

export default function MoreDetails(props){
    const[savingsData,setSavingsData] = useState("");
    const[loanData,setloanData]= useState("");
    const[user, setUser] = useState("");



    useEffect(() =>{
        Axios.post('http://localhost:3001/admin/adminMembers/moredetails',{
            userid:props.userid
        }).then(response =>{
            console.log(response.data)
            setSavingsData(response.data[0].Savings);
            setloanData(response.data[0].loans);
            setUser(response.data.User);
        })
    },[])

    return(
        <div>
            <h3>More Details</h3>
        </div>
    )
}