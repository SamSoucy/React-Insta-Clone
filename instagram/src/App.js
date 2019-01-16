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
      filteredData:[],
      search: "",
    }
  }

  handleChanges = ev => {
    this.setState({[ev.target.name]: ev.target.value});
    if(ev.target.name ==="search"){
      const filtered = this.state.dummyData.filter(post=>{
        if(post.username.includes(ev.target.value)){
          return post
        }
      });
      this.setState({filteredData: filtered});
    }
  }

  componentDidMount(){
      this.setState({dummyData:dummyData});
  }


  filterSearch = ev => {

  }


  render() {
    return (
      <div className="App">
      <SearchBar handleChanges={this.handleChanges} />
      {this.state.filteredData.length > 0 
      ? this.state.filteredData.map((post) =>{
        return  <PostContainer
        handleChanges={this.handleChanges}
        key={post.username}
        post={post}
        />})

      : this.state.dummyData.map((post) =>{
        return <PostContainer
        handleChanges={this.handleChanges}
        key={post.username}
        post={
          this.state.filteredData.length > 0 
          ? this.state.filteredData
          : post } />
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
  })
}

export default App;
