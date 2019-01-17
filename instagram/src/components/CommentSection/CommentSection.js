import React, {Component} from 'react';
import PropTypes from "prop-types";
import Comment from "./Comment"
import LikesFunction from "./Likes";

class CommentSection extends Component {
    constructor(props){
        super(props);
            this.state ={
                commentList: props.comments,
                comment: "",      
                username: props.username
            }

        }
        handleChanges =ev =>{
            this.setState({[ev.target.name]: ev.target.value});
        }
            addNewComment = ev =>{
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
        <div className="comment-section">
            <LikesFunction likes={this.props.likes}/>

            {this.state.commentList.map((comment, i)=>{
                return <Comment key={i} username={comment.username} text={comment.text}/>}
            )}
            <p className="time-stamp">{this.props.timestamp}</p>
            
            <form 
          onSubmit={this.addNewComment}
          className="add-comment d-flex">
            <input 
            onChange={this.handleChanges}
            onSubmit={this.addNewComment}
            name="comment"
            placeholder="Add a comment..."/> 
            <i className="fas fa-ellipsis-h"/>
        </form>
        </div>
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