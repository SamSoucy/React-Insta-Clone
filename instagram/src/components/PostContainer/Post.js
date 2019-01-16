import React from "react";
import"../../App.css"


const Post=props=>{
    return(
        <div className="post">
            <div className="post-header">
                <img src={props.thumbnailUrl} alt="thumbnail" />
                <p><strong>{props.username}</strong></p>
            </div>
            <div className="post-img">
                <img src={props.imageUrl} alt=""/>
            </div>
        </div>
    );
}

export default Post;
