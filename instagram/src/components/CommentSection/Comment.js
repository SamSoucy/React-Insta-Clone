import React from "react";
import PropTypes from "prop-types";

const Comment = props =>{
    return(
        <div className="d.flex">
        <p className="comment-text"><strong>{props.username}</strong> {props.text}</p>
        </div>
    )
}

export default Comment;