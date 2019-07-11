import React, {Component} from 'react';
import PropTypes from "prop-types";
import Comment from "./Comment"
import LikesFunction from "./Likes";
import styled from 'styled-components'

const ComSec = styled.div`
    width: 95%;
    margin: 0 auto;

        p{
            margin: 7px 0; 
        }
`;

const AddCom = styled.form`
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;

        input{
            width: 100%;
            border: 0;
            padding: 15px 0; 
            font-size: .9rem;
        }
`;



class CommentSection extends Component {
    constructor(props){
        super(props);
            this.state ={
                commentList: props.comments,
                comment: "",      
                username: "newf930"
            };

        }
        handleChanges =ev =>{
            this.setState({[ev.target.name]: ev.target.value});
        }
            addNewComment = (ev) =>{
            ev.preventDefault();
            this.setState({
                commentList:[...this.state.commentList,{
                    username:this.state.username,
                    text: this.state.comment
                }],
                text:""
            })
            window.localStorage.setItem("comments", JSON.stringify(this.state.commentList));
            this.setState({comment:""});
            ev.target.firstChild.value="";
        };
        render(){

    return (
        <ComSec>
            <LikesFunction likes={this.props.likes}/>

            {this.state.commentList.map((comment, i)=>{
                return <Comment key={i} username={comment.username} text={comment.text}/>}
            )}
            <p>{this.props.timestamp}</p>
            <AddCom
          onSubmit={this.addNewComment}>
            <input 
            onChange={this.handleChanges}
            onSubmit={this.addNewComment}
            name="comment"
            placeholder="Add a comment..."/> 
        </AddCom>
        </ComSec>
    )
    }
}

CommentSection.propTypes={
    comments: PropTypes.arrayOf(PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    likes: PropTypes.number,
}

export default CommentSection;