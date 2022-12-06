import React from "react";
import { useState } from "react";
import Modal from "./modal";
import Profile from "./profiles";

export default function CurrentUser(){
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProfile, setModalProfile] = useState(false);
    const currentUser = window.localStorage.getItem("username")

    return(
        <div className="user--componentt">
        <div className="current--user--dash">
            <h4>Welcome</h4>
            <h2>{currentUser}!</h2>
        </div>
            <button
            className="profiles"
            onClick={() => {
                console.log('modal')
                setModalProfile(prevstate => !prevstate);
                }}
            ><i className="fa-solid fa-user fa-2x"/>
            </button>
            {modalProfile && <Profile setModalProfile={setModalProfile} />}
        <button
        
            className="openModalBtn"
            onClick={() => {
                setModalOpen(prevState => !prevState);
            }}
            >
                {/* Open */}
                <i className="fas fa-bell fa-2x"></i>
            </button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    )
}