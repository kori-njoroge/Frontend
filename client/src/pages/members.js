import React, { useEffect,useState} from "react";
import CurrentUser from "../components/user";
import Axios from "axios";


export default function Members(){

    const[members, setMembers] = useState([]);

    useEffect(() =>{
        Axios.post("http://localhost:3001/members").then(result =>{
            setMembers(result.data)
            console.log(members)
        }).catch(err =>{
            console.log(err);
        })
    
    },[])
    console.log(members);

    return(
        <div>
            <CurrentUser />
            <div className="members-table">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members?
                        members.map(member =>(
                            (member.firstname === "Admin" ? "" :
                        <tr key={member.userId}>
                            <td>{member.userId}</td>
                            <td>{member.firstname}</td>
                            <td>{member.lastname}</td>
                            <td>0{member.phonenumber}</td>
                            <td>{member.IDnumber}</td>
                        </tr>
                    )
                        ))
                        : ""}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}