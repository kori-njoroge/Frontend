import React, { useEffect, useState } from "react";
import Axios from "axios";
import Link from "../../../components/link";
import { PDFExport} from '@progress/kendo-react-pdf'


export default function AdminSaving(){

    const[memberSavers, setSavers] = useState();
    const[savingsTotal, setTotalSavings] = useState();
    const[search, setSearch]= useState('')


    const pdfExport =React.useRef(null)

    function saveCanvasAsPDF(){
        pdfExport.current.save();
    }

    useEffect(() =>{
        Axios.post(`${Link}/adminsavings`).then(savers =>{
            console.log(savers.data);
            if(savers){
                setSavers(savers.data[0].savers);
                setTotalSavings(savers.data[1].total[0].total)
            }else{
                console.log("Sorry No Savers!")
            }
        })
    },[2])
    console.log(savingsTotal);

    return(
        <div>
            <h3>Savings</h3>
            {/* <canvas id='savings' /> */}
            <form>
                <input 
                className="search--members" 
                type="text" 
                onChange={(event) =>{
                    setSearch(event.target.value)
                }}
                placeholder="seach by name"
                />
            &nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{displa: 'none'}} id="hideElement" onClick={saveCanvasAsPDF}>Download List</button>  
            </form>
            <PDFExport ref={pdfExport}>
            <table className="savings--table--admin">
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Deposit Id</th>
                    <th>UserId</th>
                    <th className="date--savings--admin">Name</th>
                    <th>Phone Number</th>
                    <th >Deposit Date</th>
                    <th>Amount(Ksh)</th>
                </tr>
            {memberSavers ?
                memberSavers.filter((savee) =>{
                    return search.toLowerCase() === ''? savee :savee.firstname.toLowerCase().includes(search)
                }).map(savee =>(
                    <tr key={savee.savingDepositId}>
                        <td>{savee.UserUserId}</td>
                        <td>{savee.savingDepositId}</td>
                        <td>{savee.UserUserId}</td>
                        <td>{savee.firstname} {savee.lastname}</td>
                        <td>0{savee.phonenumber}</td>
                        <td>{(savee.createdAt).split('T')[0]}</td>
                        <td>{savee.savingsamount}.00</td>
                    </tr>
                ))
            : null}
                    <tr>
                        <td></td>
                        <td><b>Total</b></td>
                        <td><b></b></td>
                        <td><b></b></td>
                        <td><b></b></td>
                        <td><b></b></td>
                        <td><b>{savingsTotal? savingsTotal : 0}.00</b></td>
                    </tr>
            </tbody>
            </table>
            </PDFExport>
        </div>
    )
}