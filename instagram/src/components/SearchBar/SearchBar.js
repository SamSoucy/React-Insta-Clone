import React from 'react';
import Logo from "../logo.png"
import PropTypes from "prop-types";


const SearchBar = props => {
    return (
            <div className="search-bar">
            <div className="ser main-logo">
                <i className="fab fa-instagram"/>
                <img src={Logo} alt=""/>
            </div>
            <div classname="ser ser-input">
            <input placeholder="&#128269; Search " type="text"/>
            </div>
            <div className="ser sub-logos">
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i className="far fa-user"/>
            </div>

        </div>
    );
}

export default SearchBar;