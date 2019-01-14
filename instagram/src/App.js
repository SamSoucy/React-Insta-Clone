import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import CommentSection from "./components/CommentSection/CommentSection";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData: dummyData,
    };
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      {this.state.dummyData.map((post)=>{
        return<PostContainer post={post}/>
      })}
        
      </div>
    );
  }
}

export default App;
