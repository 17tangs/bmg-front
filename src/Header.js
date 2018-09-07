import React, { Component } from 'react';
import Tab from './Tab'
import './Header.css';



class Header extends Component{
    constructor(){
        super();
    }
    generateTabs = () =>{
        let tabsDiv = []
        this.props.tabs.forEach((t)=>{
            tabsDiv.push(<Tab name = {t} color = {this.props.color}/>);
        })
        return tabsDiv;
    }
    render(){
        return(
            <div className="Header" style={{position:this.props.headerPosition}}>
                <div className="tabs" >
                    {this.generateTabs()}
                </div>
            </div>
        )
    }
}

export default Header;
