import React from 'react';
import Logo from "../logo.png"
import LogOut from "./LogOut"
import {Header, Ser, SerInput, SubLogo} from "../Styles/Reusables";


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
            <Header>
            <Ser>
                <i className="fab fa-instagram"/>
                <img src={Logo} alt=""/>
            </Ser>
            <Ser>
                <SerInput placeholder="Search" 
                type="text" 
                name="search" 
                onChange={this.props.handleChanges}/>
            </Ser>
            <SubLogo className="ser sub-logos">
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i onClick={this.toggleMenu} className="far fa-user"/>
            </SubLogo>

            {this.state.hidden === true
                ? null
                : <LogOut username={this.state.username}
                logout={this.props.logout}
                />}

        </Header>
        )
    }
}

export default SearchBar;