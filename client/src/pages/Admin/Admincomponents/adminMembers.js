import React, { useEffect, useState } from "react";
import Axios  from "axios";
import New from "./new";



export default function Adminmembers(){

    const[members, setMembers] = useState("");
    const[more, setMore] = useState(false);


    useEffect(() =>{
        Axios.post("http://localhost:3001/admin/adminMembers").then(members =>{
            // console.log(members);
            setMembers(members.data[0].User)
            window.localStorage.setItem("allUsers",JSON.stringify(members.data));
        })
    },[])
    
    function Guesswho(){
    setMore(prevState => !prevState);
    }


    return(
        <div >
            <table className="admin--members--table">
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th className="admin--table--head">First Name</th>
                            <th className="admin--table--head">Last Name</th>
                            <th className="admin--table--head">Phone Number</th>
                            <th className="admin--table--head">IDnumber</th>
                            <th className="admin--email">Email</th>
                            <th className="admin--table--dte">Joining Date</th>
                            {/* <th className="button--moredetails"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {members?
                        members.map(member =>(
                            (member.firstname === "Admin" ?  "":
                        <tr key={member.userId}>
                            <td>{member.userId}</td>
                            <td>{member.firstname}</td>
                            <td>{member.lastname}</td>
                            <td>0{member.phonenumber}</td>
                            <td>{member.IDnumber}</td>
                            <td>{member.email}</td>
                            <td>{member.createdAt}</td>
                            {/* <td>`${format(member.createdAt, 'yyyy/mm/dd')}`</td> */}
                            {/* check code please for err */}
                            <td className="button--moredetails"><button onClick={Guesswho} className="admin--btn">More Details</button></td>
                            {/* <td className="button--moredetails"><button onClick={Guesswho} className="admin--btn">More<i className="fa fa-chevron-right" id="more--info--icon"></i> <i className="fa fa-chevron-right" id="more--info--icon"></i>Details</button></td> */}
                        </tr>
                    )
                    ))
                    : ""}
                    </tbody>
                </table>
                {more? <p><New /></p> : ""}
        </div>
    )
}