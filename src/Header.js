import React, { Component } from 'react';
import Tab from './Tab'
import './Header.css';



class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="Header" style={{position:this.props.headerPosition}}>
                {/* <div className="headerLogo">
                    <span>Boston Meditech Group </span>
                </div> */}
                <div className="tabs" >
                    <Tab name = 'Home' handleClick = {this.props.handleClick} color = {this.props.color}/>
                    <Tab name = 'Lotus AI' handleClick = {this.props.handleClick} color = {this.props.color}/>
                    <Tab name = 'MVC' handleClick = {this.props.handleClick} color = {this.props.color}/>
                    <Tab name = 'Contact Us' handleClick = {this.props.handleClick} color = {this.props.color}/>
                </div>
            </div>
        )
    }
}

export default Header;
