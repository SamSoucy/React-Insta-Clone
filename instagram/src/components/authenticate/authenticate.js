import React, { Component } from 'react';

const authenticate = PassedComp =>
class extends Component{
    constructor(){
        super();
        this.state ={
            test: "test",
        }
    }

    render(){
        return <PassedComp />;
    }
};

export default authenticate;