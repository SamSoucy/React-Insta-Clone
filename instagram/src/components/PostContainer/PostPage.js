import React, { Component } from 'react';
import '../../App.css';
import dummyData from "../../dummy-data";
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";


class PostPage extends Component {
    constructor(){
      super();
      this.state ={
        dummyData: [],
        filteredData:[],
        search: "",
        storage: "",
      }
    }
  
    handleChanges = ev => {
      this.setState({[ev.target.name]: ev.target.value});
      if(ev.target.name ==="search"){
        const filtered = this.state.dummyData.filter(post=>{
          if(post.username.includes(ev.target.value)){
            localStorage.setItem("search", post)
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
          <SearchBar 
          handleChanges={this.handleChanges} 
          logout={this.props.logout}
          username={this.props.username}
          />
          
          {this.state.filteredData.length > 0 
          ? this.state.filteredData.map((post) =>{
            return  <PostContainer
            username={this.props.username}
            handleChanges={this.handleChanges}
            key={post.username}
            post={post}
            />})
    
          : this.state.dummyData.map((post) =>{
            return <PostContainer
            handleChanges={this.handleChanges}
            key={post.username}
            post={post} />
              
            })}
            </div>
        );
      }
    }

    export default PostPage;