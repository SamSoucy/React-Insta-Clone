import React from "react";
import styled from 'styled-components'
import"../../App.css"


const PostPage = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const PostPageHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 75px;

    img{
        border-radius: 50%;
        max-width: 100%;
        height: 35px;
        margin: 10px;
    }
`;

const PostImg = styled.img`
max-width: 100%;
height: auto;
`;



const Post=props=>{
    return(
        <PostPage>
            <PostPageHead>
                <img src={props.thumbnailUrl} alt="thumbnail" />
                <p><strong>{props.username}</strong></p>
            </PostPageHead>
            <div>
                <PostImg src={props.imageUrl} alt=""/>
            </div>
        </PostPage>
    );
}

export default Post;
