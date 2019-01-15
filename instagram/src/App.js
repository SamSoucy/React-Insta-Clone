import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import PropTypes from "prop-types";

class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData: [],
    }
  }

  handleChanges = ev => {
    this.setState({[ev.target.name]: ev.target.value});
  }

  componentDidMount(){
    fetch(dummyData)
    .then(
      this.setState({
        dummyData:dummyData,
      })
    )
    .catch(err => console.log("nooooo"));
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      {this.state.dummyData.map((post, i)=>{
        return <PostContainer handleChanges={this.handleChanges} key={i} post={post}/>
      })}
        
      </div>
    );
  }
}

App.propTypes={
  dummydata:PropTypes.shape({
    comments:PropTypes.arrayOf(PropTypes.shape({
      username:PropTypes.string
    })),
    imageUrl:PropTypes.string,
    likes:PropTypes.number,
    thumbnailUrl:PropTypes.string,
    timeStamp:PropTypes.string,
    // username:PropTypes.string,
  })
}

export default App;
