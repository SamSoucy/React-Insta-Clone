import React, { Component } from 'react';
import Logo from "../logo.png"

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
                    <div className="login-page-logo">
                    <i className="fab fa-instagram"/>
                    <img src={Logo} alt=""/>
                    </div>
                    <div className="login">
                    Username: <input className="login-user"
                    type="text"
                    onChange={this.handleChanges}
                    name="username"
                    />
                    Password:<input className="login-pass"
                    type="text"
                    onChange={this.handleChanges}
                    name="password"/>
                    </div>
                    <button className="login-button" onClick={this.props.loginSubmit}>Login</button>
                    
                </form>
            </div>
        );
    }
}

export default Login;