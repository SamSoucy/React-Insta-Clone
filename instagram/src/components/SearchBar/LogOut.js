import React from "react";
import '../../App.css';

const LogOut = props =>{
    return(
        <div className="logout">
        <h2>Welcome {props.username}</h2> 
        <button className="button" onClick={props.logout}>Logout</button>
        </div>
    )
}

export default LogOut;
