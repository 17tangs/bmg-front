import React, { Component } from 'react';
import Tab from './Tab'
import './Header.css';



class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="Header">
                <div className="headerLogo">
                    <span>Boston Meditech Group </span>
                </div>
                <div className="tabs">
                    <Tab name = 'home'/>
                </div>
            </div>
        )
    }
}

export default Header;
