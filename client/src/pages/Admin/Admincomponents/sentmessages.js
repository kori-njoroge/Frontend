import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import ApiLink from '../../../components/link'
import { PDFExport} from '@progress/kendo-react-pdf'


export default function Messages() {
    const[search, setSearch] = useState ('')
    const[messages, setMessages] = useState([])

    const pdfExport =React.useRef(null)

    function saveCanvasAsPDF(){
        pdfExport.current.save();
    }

    useEffect(() =>{
        Axios.post(`${ApiLink}/sentmessages`).then(response =>{
            console.log(response.data)
            setMessages(response.data)
            // set
        }).catch(err =>{
            console.log(err)
        })
    },[])

    console.log("oh",messages)



    return (
        <div className='messages--component'>
            <h3>Messages</h3>
            <form>
                <input 
                className="search--members" 
                type="text" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}
                placeholder="Search by members"
                />&nbsp;&nbsp;&nbsp;&nbsp;<button style={{displa: 'none'}} id="hideElement" onClick={saveCanvasAsPDF}>Download Messages</button>     
            </form>
            <PDFExport ref={pdfExport}>  
            <table className='messages--table'>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th className="">User Id</th>
                            <th className="">recipient Name</th>
                            <th className="">Source</th>
                            <th className="">Date Sent</th>
                            <th className="">Time</th>
                            <th className="message--col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages?
                        messages.filter((message) =>{
                            return search.toLowerCase() === ''? message :message.to.toLowerCase().includes(search)
                        }).map(message =>(
                        <tr key={message.NotificationId}>
                            <td>{message.NotificationId}</td>
                            <td>{message.recipientUserId}</td>
                            <td>{message.to}</td>
                            <td>{message.source}</td>
                            <td>{(message.createdAt).split('T')[0]}</td>
                            <td>{((message.createdAt).split('T')[1]).split('.')[0]}</td>
                            <td>{message.message}</td>
                        </tr>
                    ))
                    : ""}
                    </tbody>
                </table>
                </PDFExport>
        </div>
    )
}
