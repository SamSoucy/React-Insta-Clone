import React, {Component} from "react";
import styled from 'styled-components'

const ActButt = styled.div`
    font-size: 1.5rem;
    margin: 10px 0;
`;

const ActButtI = styled.i`
    margin: 0 10px 0 0;
`;

class LikesFunction extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalLikes: props.likes,
            likeCount:0
        }
    }

    addLike = ev =>{
        if(this.state.likeCount < 1) {
            this.setState(prevState =>({totalLikes: ++prevState.totalLikes}));
            this.setState(prevState =>({likeCount: ++prevState.likeCount}));
            ev.target.classList.remove("far");
            ev.target.classList.add("fas");
            ev.target.classList.add('red');
        }

        else if(this.state.likeCount===1){
            this.setState(prevState =>({totalLikes: --prevState.totalLikes}));
            this.setState(prevState =>({likeCount: --prevState.likeCount}));
            ev.target.classList.add("far");
            ev.target.classList.remove("fas");
            ev.target.classList.remove('red');
        }
    }

    render(){
        return(
            <div>
                <ActButt className="action-button">
                    <ActButtI onClick={this.addLike} className="far fa-heart"/>
                    <ActButtI className="far fa-comment"/> 
                </ActButt>
                <p><strong>{this.state.totalLikes} likes</strong></p>
            </div>
        )
    }
}

export default LikesFunction;