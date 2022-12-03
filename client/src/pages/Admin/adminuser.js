import React from "react";

export default function CurrentAdminUser(){
    const currentUser = window.localStorage.getItem("username")

    return(
        <div className="user--component">
        <div>
            <h4>Welcome</h4>
            <h2>{currentUser}!</h2>
        </div>

        </div>
    )
}