import React, { useEffect,useState} from "react";
import CurrentUser from "../components/user";
import Axios from "axios";
import Link from "../components/link";
import { PDFExport} from '@progress/kendo-react-pdf'


export default function Members(){

    const[members, setMembers] = useState([]);
    const[more, setMore] = useState(false);
    const[search,setSearch] = useState('')

    const pdfExport =React.useRef(null)

    function saveCanvasAsPDF(){
        pdfExport.current.save();
    }

    var element = document.querySelector("#hideElement");

// Then, set the display property to none
    // element.style.display = "none";


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
            {/* <canvas id='my-canvas' /> */}
            {/* <PDFExport ref={pdfExport}> */}
            <h2>Members</h2>
            {/* </PDFExport> */}
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
                />&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{displa: 'none'}} id="hideElement" onClick={saveCanvasAsPDF}>Download List</button>     

            </form>
            <PDFExport ref={pdfExport}>
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
                </PDFExport>
            </div>
        </div>
    )
}