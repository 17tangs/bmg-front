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
                {/* <div className="headerLogo">
                    <span>Boston Meditech Group </span>
                </div> */}
                <div className="tabs" >
                    <Tab name = 'Home' handleClick = {this.props.handleClick} color = {this.props.color}/>
                    <Tab name = 'Products' handleClick = {this.props.handleClick} color = {this.props.color}/>
                    <Tab name = 'Contact Us' handleClick = {this.props.handleClick} color = {this.props.color}/>
                </div>
            </div>
        )
    }
}

export default Header;
