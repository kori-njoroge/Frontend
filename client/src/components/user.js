import React from "react";
import { useState } from "react";
import Modal from "./modal";

export default function CurrentUser(){
    const [modalOpen, setModalOpen] = useState(false);
    const currentUser = window.localStorage.getItem("username")

    return(
        <div className="user--component">
        <div>
            <h4>Welcome</h4>
            <h2>{currentUser}!</h2>
        </div>
        <button
        
            className="openModalBtn"
            onClick={() => {
            setModalOpen(true);
            }}
            >
                {/* Open */}
                <i className="fas fa-bell fa-2x"></i>
            </button>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}