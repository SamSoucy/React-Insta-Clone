import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components'
import '../../App.css';
import PropTypes from "prop-types";
import Post from "./Post"



const PostContain = styled.div`
width: 604px;
height: auto;
margin: 30px auto;
border: 1px solid gray;
`;

const PostContainer = props =>{
    return(
        <PostContain >
        <Post username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} imageUrl={props.post.imageUrl}/>
        <CommentSection 
        handleChanges={props.post.handlechanges} 
        timestamp={props.post.timestamp} 
        likes={props.post.likes} 
        comments={props.post.comments} 
        username={props.username}
        />
        </PostContain>
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