import React from "react";
import "./Modal.css";

export default function Modal({ setOpenModal }) {
    console.log(setOpenModal)

    const styles = {
        overlay:{
            zIndex: 1000
        }
    }
    
return (
    <div className="modalBackground">
    <div className="modalContainer" style={{styles}}>
        <div className="titleCloseBtn">
        <button
            onClick={() => {
            setOpenModal(prevState => !prevState);
            }}
        >
            X
        </button>
        </div>
        <div className="title">
        <h3>Are You Sure You Want to Continue?</h3>
        </div>
        <div className="bdy">
        <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
        <button
            onClick={() => {
            setOpenModal(false);
            }}
            id="cancelBtn"
        >
            Cancel
        </button>
        <button>Continue</button>
        </div>
    </div>
    </div>
);
}
