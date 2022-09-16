import React from "react";

export default function CurrentUser(){
    const currentUser = window.localStorage.getItem("username")

    return(
        <div>
            <h4>Welcome</h4>
            <h2>{currentUser}!</h2>
        </div>
    )
}