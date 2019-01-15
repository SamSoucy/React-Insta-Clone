import React, { Component } from 'react';
import Logo from "../logo.png"
const SearchBar = props => {
    return (
            <div className="search-bar">
            <div className="ser main-logo">
                <i className="fab fa-instagram"/>
                <img src={Logo} alt=""/>
            </div>
            <div classname="ser input">
            <input placeholder="Search" type="text"/>
            </div>
            <div className="sub-logos">
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i className="far fa-user"/>
            </div>

        </div>
    );
}

export default SearchBar;