import React, {Component} from "react";

class LikesFunction extends Component{
    constructor(props){
        super(props);
        this.state = (
            totalLikes: props.likes,
            likeCount:0
        )
    }

    addLike = ev =>{
        if(this.state.likeCount < 1) {
            this.setState(prevState =>({totalLikes: ++prevState.totalLikes}));
            this.setState(prevState =>({likeCount: ++prevState.likeCount}));
            ev.target.classList.remove("far");
            ev.target.classList.add("fas");
        }

        else if(this.state.likeCount===1){
            this.setState(prevState =>({totalLikes: --prevState.totalLikes}));
            this.setState(prevState =>({likeCount: --prevState.likeCount}));
            ev.target.classList.remove("far");
            ev.target.classList.add("fas");
        }
    }

    render(){
        return(
            <div>
                <div className="d-flex action-button">
                    <i onClick={this.addLike} className="far fa-heart"/>"
                    <i className="far fa-comment"/> 
                </div>
                <p><strong>{this.state.totalLikes} likes</strong></p>
            </div>
        )
    }
}

export default Likes;