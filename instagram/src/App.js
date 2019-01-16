import React, { Component } from 'react';
import './App.css';
import PostPage from "./components/PostContainer/PostPage";
import Login from "./components/Login/Login"
import authenticate from "./components/authenticate/authenticate";

class App extends Component {
  constructor(){
    super();
    this.state ={
      username: "",
      password:"",
      
    }
  }
  handleChanges = ev =>{
    this.setState({[ev.target.name]: ev.target.value});
  }

  loginSubmit = () => {
    if(this.state.username && this.state.password){
      localStorage.setItem("username", `${this.state.username}`);
      localStorage.setItem("password", `${this.state.password}`);
    }
  }

render() {
    return (
      <div className="App">
      <Login
      handleChanges={this.handleChanges}
      loginSubmit={this.loginSubmit}
      />
      <PostPage/>
        </div>
    );
  }
}
      


export default App;
