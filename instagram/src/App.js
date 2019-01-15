import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
// import CommentSection from "./components/CommentSection/CommentSection";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Proptypes from "prop-types";

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
      {this.state.dummyData.map((post, i)=>{
        return<PostContainer key={i} post={post}/>
      })}
        
      </div>
    );
  }
}

App.propTypes={
  dummydata:Proptypes.shape({
    comments:Proptypes.arrayOf(PropTypes.shape({
      username:PropTypes.string
    })),
    imageUrl:PropTypes.string,
    likes:PropTypes.number,
    thumbnailUrl:PropTypes.string,
    timeStamp:PropTypes.string,
    username:PropTypes.string,
  })
}

export default App;
