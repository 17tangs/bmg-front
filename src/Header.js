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
                    <Tab name = 'Home'/>
                    <Tab name = 'Products'/>
                    <Tab name = 'Contact Us'/>
                </div>
            </div>
        )
    }
}

export default Header;
