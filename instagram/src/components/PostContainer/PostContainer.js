import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import '../../App.css';
import PropTypes from "prop-types";
import Post from "./Post"

const PostContainer = props =>{
    return(
        <div className="post-container card">
        <Post username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} imageUrl={props.post.imageUrl}/>
        <CommentSection 
        handleChanges={props.post.handlechanges} 
        timestamp={props.post.timestamp} 
        likes={props.post.likes} 
        comments={props.post.comments} 
        username={props.username}
        />
        </div>
    );
}

PostContainer.propTypes={
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
    })),
    timestamp: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
}



export default PostContainer;