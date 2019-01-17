import React from 'react';
import Logo from "../logo.png"
import LogOut from "./LogOut"
import styled from 'styled-components'


const Search = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;;
    border-bottom: 1px solid black;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 50px;
`;

const SerInput = styled.input`
font-size: 1rem;
text-align: center;
margin: 0 auto;
`;

const Ser = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MainI = styled.i`
width: 25%;
margin-right:25px;
margin-left:25px;
text-align: center;
align-self: center;
font-size: 2.5rem;
`;

const SubLogo = styled.div`
justify-content: flex-end;
    font-size:25%;
`;

const SubLogoI = styled.i`
margin: 0 20px;
    font-size: 2rem;
    
`;

const MainLogoImg = styled.img`
height: 40px;
    max-width: 75%;
    margin-left: 25px;
    
`;



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
            <Search className="search-bar position-relative">
            <Ser className="ser main-logo">
                <MainI className="fab fa-instagram"/>
                <MainLogoImg src={Logo} alt=""/>
            </Ser>
            <Ser classname="ser ser-input">
                <SerInput placeholder="Search" 
                type="text" 
                name="search" 
                onChange={this.props.handleChanges}/>
            </Ser>
            <SubLogo className="ser sub-logos">
                <SubLogoI className="far fa-compass"/>
                <SubLogoI className="far fa-heart"/>
                <SubLogoI onClick={this.toggleMenu} className="far fa-user"/>
            </SubLogo>

            {this.state.hidden === true
                ? null
                : <LogOut username={this.state.username}
                logout={this.props.logout}
                />}

        </Search>
        )
    }
}

export default SearchBar;