import React, { Component } from 'react';
import CommentSection from "../CommentSection/CommentSection";
import '../../App.css';

const PostContainer = props =>{
    return(
        <div className="post">
        <div>
            <img src ={props.post.thumbnailUrl}/>
            <p>{props.post.username}</p>
        </div>
        <div>
            <img src={props.post.imageUrl} alt=""/>
        </div>
        <CommentSection comments = {props.post.comments}/>
        </div>
    );
}

export default PostContainer;