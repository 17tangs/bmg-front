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
                    <Tab name = 'Home'  color = {this.props.color}/>
                    <Tab name = 'Lotus AI'  color = {this.props.color}/>
                    <Tab name = 'MVC'  color = {this.props.color}/>
                    <Tab name = 'Career' color = {this.props.color}/>
                    <Tab name = 'Contact Us'  color = {this.props.color}/>
                </div>
            </div>
        )
    }
}

export default Header;
