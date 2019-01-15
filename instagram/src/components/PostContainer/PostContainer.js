import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import '../../App.css';
import PropTypes from "prop-type";

const PostContainer = props =>{
    return(
        <div className="post">
        <div classNme="post-header">
            <img src ={props.post.thumbnailUrl}/>
            <p>{props.post.username}</p>
        </div>
        <div className="post-img">
            <img src={props.post.imageUrl} alt=""/>
        </div>
        <CommentSection timeStamp = {props.post.timeStamp} likes={props.post.likes} comments={props.post.comments}/>
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
    timeStamp: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
}



export default PostContainer;