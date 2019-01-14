import React, { Component } from 'react';
import Title from "../Title.png"
const SearchBar = props => {
    return (
        <div>
            <div>
                <i class="fab fa-instagram"/>
                <img src={Title} alt=""/>
            </div>
            <div>
            <input placeholder="Search" type="text"/>
            </div>
            <div>
                <i class="far fa-compass"/>
                <i class="far fa-heart"></i>
                <i class="far fa-user"/>
            </div>

        </div>
    );
}

export default SearchBar;