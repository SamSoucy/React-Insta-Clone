import React, { Component } from 'react';
import Logo from "../logo.png"
import styled from 'styled-components'

const LoginPage = styled.div`
align-items: center;
justify-content: flex-start;
width: 604px;
margin: 30px auto;
text-align: center; 
align-self: center;
font-size: 2.5rem;
border-bottom: 1px solid black;
`;

const LoginUser = styled.input`
font-size: 2.5rem;
`;

const LoginPass = styled.input`
    font-size: 2.5rem;
    margin-bottom: 5%;
`;
const LoginButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 400px;
margin: 30px auto;
border: 1px solid black;
text-align: center; 
align-self: center;
font-size: 2rem;
border-radius: 3px;
`;

const LoginPageLogo = styled.div`
    align-items: center;
    justify-content: flex-start;
    width: 604px;
    margin: 30px auto;
    border: 1px solid black;
    text-align: center;
    align-self: center;
    font-size: 2.5rem;
`;

const LoginPageLogoImg = styled.img`
height: 40px;
max-width: 75%;
margin-left: 25px;
margin-top: 10px;
`;

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:"",
            password: "",
            loggedIn: props.loggedIn,                
        
        }
    }

    handleChanges = ev => {
        this.setState({[ev.target.name]: ev.target.value});
    }

    loginSubmit = e =>{
        if(this.state.username && this.state.password){
            localStorage.setItem("username", `${this.state.username}`);
            localStorage.setItem("password", `${this.state.password}`);
            
        }
    }

    render(){
        return(
            <div className = "App">
                <form className onSubmit={this.loginSubmit}>
                    <LoginPageLogo className="login-page-logo">
                    <i className="fab fa-instagram"/>
                    <LoginPageLogoImg src={Logo} alt=""/>
                    </LoginPageLogo>
                    <LoginPage className="login">
                    Username: <LoginUser className="login-user"
                    type="text"
                    onChange={this.handleChanges}
                    name="username"
                    />
                    Password:<LoginPass className="login-pass"
                    type="text"
                    onChange={this.handleChanges}
                    name="password"/>
                    </LoginPage>
                    <LoginButton className="login-button" onClick={this.props.loginSubmit}>Login</LoginButton>
                    
                </form>
            </div>
        );
    }
}

export default Login;