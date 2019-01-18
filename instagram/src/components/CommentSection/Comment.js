import React from "react";


const Comment = props =>{
    return(
        <div>
        <p className="comment-text"><strong>{props.username}</strong> {props.text}</p>
        </div>
    )
}

export default Comment;