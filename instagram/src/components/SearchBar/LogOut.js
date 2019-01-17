import React from "react";
import styled from 'styled-components'
import '../../App.css';

const LogOutPage = styled.div`
margin-right:25px;
text-align: center;
font-size: 1rem;
margin-bottom:25px;
`;

const LogOutButton = styled.button`
font-size:1rem;
    border-radius: 1px;
`;

const LogOut = props =>{
    return(
        <LogOutPage className="logout">
        <h2>Hello! {props.username}</h2> 
        <LogOutButton className="button" onClick={props.logout}>Logout</LogOutButton>
        </LogOutPage>
    )
}

export default LogOut;
