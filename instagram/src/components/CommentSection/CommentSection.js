import React, { Component } from 'react';

const CommentSection = props => {
    return (
        <div>
            <div>
                <i class="far fa-heart"/>
                <i class="far fa-comment"/>
            </div>
            <p>{373} likes</p>
            {props.comments.map((comment)=>{
                return <p>{comment.username} {comment.text}</p>
            })}
            <p>2 HOURS AGO</p>
            <input placeholder="Add a comment..."/>
        </div>
    )
}

export default CommentSection;