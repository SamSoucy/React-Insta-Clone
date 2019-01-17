import React from 'react';
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import Logo from "../logo.png"
import LogOut from "./LogOut"



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: props.username,
            hidden: true
        }
    }

    toggleMenu = () => {
        if(this.state.hidden === true){
            this.setState({hidden:false})
        }
        else if(this.state.hidden === false){
            this.setState({hidden: true})
        }
    }
    render(){
        return (
            <div className="search-bar position-relative">
            <div className="ser main-logo">
                <i className="fab fa-instagram"/>
                <img src={Logo} alt=""/>
            </div>
            <div classname="ser ser-input">
                <input placeholder="Search" 
                type="text" 
                name="search" 
                onChange={this.props.handleChanges}/>
            </div>
            <div className="ser sub-logos">
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i onClick={this.toggleMenu} className="far fa-user"/>
            </div>

            {this.state.hidden === true
                ? null
                : <LogOut username={this.state.username}
                logout={this.props.logout}
                />}

        </div>
        )
    }
}

export default SearchBar;