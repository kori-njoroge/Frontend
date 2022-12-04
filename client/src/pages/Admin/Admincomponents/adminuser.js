import React from "react";
import Adminmodal from "./Adminmodal";
import { useState} from "react";


export default function CurrentAdminUser(){
    const currentUser = window.localStorage.getItem("username")
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className="admin--user--component">
            <div className="user--component">
                <div>
                    <h4>Welcome</h4>
                    <h2>{currentUser}!</h2>
                </div>
            </div>
            <div>
            <button 
            id="notif--btn" 
            className="admin--btn"
            // className="openModalBtn"
            onClick={() => {
            setModalOpen(prevstate => !prevstate);
            }}
            >
                Send Message
            </button> 
            {modalOpen && <Adminmodal setOpenModal={setModalOpen} />}
            </div>
        </div>
    )
}