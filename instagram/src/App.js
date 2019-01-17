import React, { Component } from 'react';
import './App.css';
import PostPage from "./components/PostContainer/PostPage";
import Login from "./components/Login/Login"
import authenticate from "./components/authenticate/authenticate";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      username: props.username,
      password:"",
      loggedIn: props.loggedIn,
      
    }
  }
 

render() {
    return (
      <div className="App">
      <PostPage
      username={this.state.username}
      logout={this.props.logout}
      />
        </div>
    );
  }
}
      


export default authenticate(App)(Login);
