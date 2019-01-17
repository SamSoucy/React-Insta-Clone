import React from "react";
import '../../App.css';

const LogOut = props =>{
    return(
        <div className="logout position-absolute w-25 bg-info">
        <h3>Welcome {props.username}</h3>
        <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default LogOut;
