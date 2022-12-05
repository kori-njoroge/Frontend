import React, { useEffect,useState} from "react";
import CurrentUser from "../components/user";
import Axios from "axios";
import Link from "../components/link";


export default function Members(){

    const[members, setMembers] = useState([]);
    const[more, setMore] = useState(false);
    const[search,setSearch] = useState('')


    useEffect(() =>{
        Axios.post(`${Link}/members`).then(result =>{
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
            <h2>Members</h2>
                <div className="members-table">
            <form>
                <input 
                className="search--members" 
                id="members--searchbtn"
                type="text" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}
                placeholder="seach members"
                />
            </form>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Date Joined</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members?
                        members.filter((member) =>{
                            return search.toLowerCase() === ''? member :member.firstname.toLowerCase().includes(search)
                        }).map(member =>(
                            (member.firstname === "Admin" ? "" :
                        <tr key={member.userId}>
                            
                            <td>{member.userId}</td>
                            <td>{member.firstname}</td>
                            <td>{member.lastname}</td>
                            <td>0{member.phonenumber}</td>
                            <td>{(member.createdAt).split('T')[0]}</td>
                            
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