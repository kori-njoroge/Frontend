import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage(){
    return(
        <div>
            <div className="error--section">
            <h1>Page Not Found</h1>
            <p>We could not find what you were looking for.</p>
            </div>
                {/* <p className="copyright">Copyright&copy;2022St Andrews||All rights reserved</p> */}
        </div>
    )
}