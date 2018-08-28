import React, { Component } from 'react';
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
            </div>
        )
    }
}

export default Header;
